ORDER BY
    s.is_core_common DESC,
    CASE WHEN s.is_core_common THEN
        FIND_IN_SET(r.usage_disposition, 'Required,Preferred,Restricted,Emerging,Decommission,Prohibited'),
        FIND_IN_SET(s.reuse_model, 'Shared Platform,Shared System,Shared Code,Shared Component'),
        s.name
    END,
    r.usage_disposition,
    s.reuse_model,
    s.name;
