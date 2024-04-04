ORDER BY
    s.is_core_common DESC, -- Core & Common first
    CASE
        WHEN s.is_core_common THEN
            CASE r.usage_disposition
                WHEN 'Required' THEN 1
                WHEN 'Preferred' THEN 2
                WHEN 'Restricted' THEN 3
                WHEN 'Emerging' THEN 4
                WHEN 'Decommission' THEN 5
                WHEN 'Prohibited' THEN 6
            END
    END, -- Disposition
    CASE
        WHEN s.is_core_common THEN
            CASE r.reuse_model
                WHEN 'Shared Platform' THEN 1
                WHEN 'Shared System' THEN 2
                WHEN 'Shared Code' THEN 3
                WHEN 'Shared Component' THEN 4
            END
    END, -- Reuse Model
    s.name; -- Solution Name
