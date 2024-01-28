if (eventLogDto.getOldValue() == null || eventLogDto.getEventCreatedDate().compareTo(event.getEventCreatedDate()) > 0) {
    eventLogDto.setOldValue(event.getOldValue());
}

if (eventLogDto.getNewValue() == null || eventLogDto.getEventCreatedDate().compareTo(event.getEventCreatedDate()) < 0) {
    eventLogDto.setNewValue(event.getNewValue());
}
