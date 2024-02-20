private List<EventLogDto> processGroupedEvents(List<EventLogProjection> eventsWithSameNameAndDay) {
    List<EventLogDto> result = eventsWithSameNameAndDay.stream()
        .map(Optional::ofNullable) // Wrap each EventLogProjection in an Optional
        .filter(opt -> opt.map(EventLogProjection::getNewValue).isPresent()) // Filter out null newValue values
        .collect(Collectors.groupingBy(
            opt -> opt.map(EventLogProjection::getNewValue).orElse(""), // Use an empty string for null values
            Collectors.mapping(Optional::get, Collectors.toList())
        ))
        .values().stream()
        .map(group -> group.stream()
            .sorted(Comparator.comparing(EventLogProjection::getEventCreatedDate))
            .reduce((first, second) -> second) // Get the last element in the sorted group
            .map(this::mapToEventLogDto)
            .map(eventLogDto -> {
                eventLogDto.setOldValue(group.get(0).getOldValue());
                return eventLogDto;
            })
            .orElse(null)) // Handle empty groups
        .filter(Objects::nonNull)
        .collect(Collectors.toList());

    return result;
}
