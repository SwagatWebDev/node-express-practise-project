private String getEventType(String path) {
    if (StringUtils.isBlank(path)) {
        return null;
    }
    
    switch (path.toLowerCase()) {
        case CommonConstants.SUBMITTED:
            return CommonConstants.EVENT_TYPE_NEW;
        case CommonConstants.ARCHIVED_PATH:
            return CommonConstants.EVENT_TYPE_ARCHIVED;
        case CommonConstants.REL_SOLUTION_TO_CAPABILITY:
        case CommonConstants.REL_SOLUTION_TO_BUSINESS_CAPABILITY:
        case CommonConstants.REL_CAPABILITY_TO_SOLUTION:
        case CommonConstants.REL_PATTERN_BUSINESS_CAPABILITY:
        case CommonConstants.REL_STANDARD_BUSINESS_CAPABILITY:
            return CommonConstants.EVENT_TYPE_CAPABILITY;
        default:
            return CommonConstants.EVENT_TYPE_DISPOSITION;
    }
}
