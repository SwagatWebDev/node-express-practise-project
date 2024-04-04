ORDER BY
    CASE 
        WHEN s.is_core_common THEN
            CASE r.usage_disposition
                WHEN 'Required' THEN 1
                WHEN 'Preferred' THEN 2
                WHEN 'Restricted' THEN 3
                WHEN 'Emerging' THEN 4
                WHEN 'Decommission' THEN 5
                WHEN 'Prohibited' THEN 6
                ELSE 7
            END,
            CASE s.reuse_model
                WHEN 'Shared Platform' THEN 1
                WHEN 'Shared System' THEN 2
                WHEN 'Shared Code' THEN 3
                WHEN 'Shared Component' THEN 4
                ELSE 5
            END,
            s.name
        ELSE
            CASE r.usage_disposition
                WHEN 'Required' THEN 1
                WHEN 'Preferred' THEN 2
                WHEN 'Restricted' THEN 3
                WHEN 'Emerging' THEN 4
                WHEN 'Decommission' THEN 5
                WHEN 'Prohibited' THEN 6
                ELSE 7
            END,
            CASE s.reuse_model
                WHEN 'Shared Platform' THEN 1
                WHEN 'Shared System' THEN 2
                WHEN 'Shared Code' THEN 3
                WHEN 'Shared Component' THEN 4
                ELSE 5
            END,
            s.name
    END;
