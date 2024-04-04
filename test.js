ORDER BY
    s.is_core_common DESC,
    CASE s.is_core_common
        WHEN true THEN
            FIELD(r.usage_disposition, 'Required', 'Preferred', 'Restricted', 'Emerging', 'Decommission', 'Prohibited'),
            FIELD(s.reuse_model, 'Shared Platform', 'Shared System', 'Shared Code', 'Shared Component'),
            s.name
        ELSE
            FIELD(r.usage_disposition, 'Required', 'Preferred', 'Restricted', 'Emerging', 'Decommission', 'Prohibited'),
            FIELD(s.reuse_model, 'Shared Platform', 'Shared System', 'Shared Code', 'Shared Component'),
            s.name
    END;
