private List<EventLogDto> getCombinedEventLogDtoList(List<EventLogProjection> eventLogData) {
    // Group events by name, date, and path for capability and disposition
    Map<String, List<EventLogProjection>> groupedByNameAndPathAndDayCapability =
        eventLogData.stream()
            .filter(this::isCapabilityMatchingPath)
            .collect(
                Collectors.groupingBy(
                    event ->
                        event.getName()
                        + event.getEventCreatedDate().substring(0, 10)));

    Map<String, List<EventLogProjection>> groupedByNameAndPathAndDayDisposition =
        eventLogData.stream()
            .filter(this::isDispositionMatchingPath)
            .collect(
                Collectors.groupingBy(
                    event ->
                        event.getName()
                        + event.getEventCreatedDate().substring(0, 10)));

    // Process grouped events for capability and disposition separately
    List<EventLogDto> processedCapabilityEvents = groupedByNameAndPathAndDayCapability.values().stream()
        .flatMap(group -> processGroupedEvents(group).stream())
        .collect(Collectors.toList());

    List<EventLogDto> processedDispositionEvents = groupedByNameAndPathAndDayDisposition.values().stream()
        .flatMap(group -> processGroupedEvents(group).stream())
        .collect(Collectors.toList());

    // Combine and filter the processed events
    return Stream.concat(processedCapabilityEvents.stream(), processedDispositionEvents.stream())
        .filter(
            event ->
                !Objects.equals(event.getOldValue(), event.getNewValue())
                && StringUtils.isNotBlank(event.getNewValue())
                && StringUtils.isNotBlank(event.getOldValue()))
        .sorted(Comparator.comparing(EventLogDto::getEventCreatedDate).reversed())
        .toList();
}
