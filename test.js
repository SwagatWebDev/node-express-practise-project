ORDER BY
    s.is_core_common DESC,
    CASE
        WHEN s.is_core_common = true THEN
            CASE
                WHEN r.usage_disposition = 'Required' THEN 1
                WHEN r.usage_disposition = 'Preferred' THEN 2
                WHEN r.usage_disposition = 'Restricted' THEN 3
                WHEN r.usage_disposition = 'Emerging' THEN 4
                WHEN r.usage_disposition = 'Decommission' THEN 5
                WHEN r.usage_disposition = 'Prohibited' THEN 6
                ELSE 7
            END,
            CASE
                WHEN s.reuse_model = 'Shared Platform' THEN 1
                WHEN s.reuse_model = 'Shared System' THEN 2
                WHEN s.reuse_model = 'Shared Code' THEN 3
                WHEN s.reuse_model = 'Shared Component' THEN 4
                ELSE 5
            END,
            s.name
        ELSE
            CASE
                WHEN r.usage_disposition = 'Required' THEN 1
                WHEN r.usage_disposition = 'Preferred' THEN 2
                WHEN r.usage_disposition = 'Restricted' THEN 3
                WHEN r.usage_disposition = 'Emerging' THEN 4
                WHEN r.usage_disposition = 'Decommission' THEN 5
                WHEN r.usage_disposition = 'Prohibited' THEN 6
                ELSE 7
            END,
            CASE
                WHEN s.reuse_model = 'Shared Platform' THEN 1
                WHEN s.reuse_model = 'Shared System' THEN 2
                WHEN s.reuse_model = 'Shared Code' THEN 3
                WHEN s.reuse_model = 'Shared Component' THEN 4
                ELSE 5
            END,
            s.name
    END;
