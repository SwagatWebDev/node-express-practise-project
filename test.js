private List<EventLogDto> processGroupedEvents(List<EventLogProjection> eventsWithSameNameAndDay) {
    List<EventLogDto> result = new ArrayList<>();

    Map<String, List<EventLogProjection>> groupedByCapabilityPath = eventsWithSameNameAndDay.stream()
        .collect(Collectors.groupingBy(this::extractCapabilityPathFromNewValue));

    for (List<EventLogProjection> group : groupedByCapabilityPath.values()) {
        List<EventLogProjection> sortedByEventCreatedTime = group.stream()
            .sorted(Comparator.comparing(EventLogProjection::getEventCreatedDate))
            .toList();

        EventLogProjection uniqueRecord = sortedByEventCreatedTime.get(sortedByEventCreatedTime.size() - 1);
        EventLogDto eventLogResult = mapToEventLogDto(uniqueRecord);
        eventLogResult.setOldValue(sortedByEventCreatedTime.get(0).getOldValue());
        result.add(eventLogResult);
    }

    return result;
}

private String extractCapabilityPathFromNewValue(EventLogProjection event) {
    String newValue = event.getNewValue();
    if (newValue != null && !newValue.isEmpty()) {
        // Regular expression to extract the capability path
        Matcher matcher = Pattern.compile("\"(.*?)\"").matcher(newValue);
        if (matcher.find()) {
            return matcher.group(1);
        }
    }
    return ""; // Return an empty string if no capability path is found
}

