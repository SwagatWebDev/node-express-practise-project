ORDER BY
    sis_core_common DESC, -- Core & Common first
    CASE
        WHEN sis_core_common THEN
            CASE r.usage_disposition
                WHEN 'Required' THEN 1
                WHEN 'Preferred' THEN 2
                WHEN 'Restricted' THEN 3
                WHEN 'Emerging' THEN 4
                WHEN 'Decommission' THEN 5
                WHEN 'Prohibited' THEN 6
            END
        ELSE
            CASE r.usage_disposition
                WHEN 'Required' THEN 1
                WHEN 'Preferred' THEN 2
                WHEN 'Restricted' THEN 3
                WHEN 'Emerging' THEN 4
                WHEN 'Decommission' THEN 5
                WHEN 'Prohibited' THEN 6
            END
    END ASC, -- Disposition
    CASE s.reuse_model
        WHEN 'Shared Platform' THEN 1
        WHEN 'Shared System' THEN 2
        WHEN 'Shared Code' THEN 3
        WHEN 'Shared Component' THEN 4
    END ASC, -- Reuse Model
    s.name ASC; -- Solution Name
