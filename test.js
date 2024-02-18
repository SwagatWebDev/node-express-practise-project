private List<EventLogDto> getCombinedEventLogDtoList(List<EventLogProjection> eventLogData) {
    Map<String, List<EventLogProjection>> groupedByNameAndPathAndDayCapability =
        eventLogData.stream()
            .filter(this::isCapabilityMatchingPath)
            .collect(Collectors.groupingBy(
                event -> event.getName() + event.getEventCreatedDate().substring(0, 10)));

    Map<String, List<EventLogProjection>> groupedByNameAndPathAndDayDisposition =
        eventLogData.stream()
            .filter(this::isDispositionMatchingPath)
            .collect(Collectors.groupingBy(
                event -> event.getName() + event.getEventCreatedDate().substring(0, 10)));

    List<EventLogDto> processedCapabilityEvents = groupedByNameAndPathAndDayCapability.values().stream()
        .flatMap(Collection::stream) // Flatten the list of lists
        .collect(Collectors.groupingBy(this::extractCapabilityPathFromNewValue)) // Group by capability path
        .values().stream()
        .map(this::processGroupedEvents) // Process each group
        .collect(Collectors.toList());

    List<EventLogDto> processedDispositionEvents = groupedByNameAndPathAndDayDisposition.values().stream()
        .map(this::processGroupedEvents)
        .collect(Collectors.toList());

    return Stream.concat(processedCapabilityEvents.stream(), processedDispositionEvents.stream())
        .filter(event ->
            !Objects.equals(event.getOldValue(), event.getNewValue()) &&
            StringUtils.isNotBlank(event.getNewValue()) &&
            StringUtils.isNotBlank(event.getOldValue()))
        .sorted(Comparator.comparing(EventLogDto::getEventCreatedDate).reversed())
        .toList();
}
