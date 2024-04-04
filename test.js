ORDER BY
    CASE s.is_core_common
        WHEN true THEN 0  -- Core & Common solutions first
        ELSE 1            -- Non-Core & Common solutions last
    END,
    CASE r.usage_disposition
        WHEN 'Required' THEN 1
        WHEN 'Preferred' THEN 2
        WHEN 'Restricted' THEN 3
        WHEN 'Emerging' THEN 4
        WHEN 'Decommission' THEN 5
        WHEN 'Prohibited' THEN 6
    END,
    CASE s.reuse_model
        WHEN 'Shared Platform' THEN 1
        WHEN 'Shared System' THEN 2
        WHEN 'Shared Code' THEN 3
        WHEN 'Shared Component' THEN 4
    END,
    s.name;
