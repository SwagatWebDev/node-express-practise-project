ORDER BY
    CASE
        WHEN r.usage_disposition = 'Required' THEN 1
        WHEN r.usage_disposition = 'Preferred' THEN 2
        WHEN r.usage_disposition = 'Restricted' THEN 3
        WHEN r.usage_disposition = 'Emerging' THEN 4
        WHEN r.usage_disposition = 'Decommission' THEN 5
        WHEN r.usage_disposition = 'Prohibited' THEN 6
        ELSE 7 -- This covers any other values that might appear
    END,
    CASE
        WHEN r.usage_disposition = 'Required' THEN
            CASE s.reuse_model
                WHEN 'Shared Platform' THEN 1
                WHEN 'Shared System' THEN 2
                WHEN 'Shared Code' THEN 3
                WHEN 'Shared Component' THEN 4
                ELSE 5 -- This covers any other values that might appear
            END
        WHEN r.usage_disposition = 'Preferred' THEN
            CASE s.reuse_model
                WHEN 'Shared Platform' THEN 1
                WHEN 'Shared System' THEN 2
                WHEN 'Shared Code' THEN 3
                WHEN 'Shared Component' THEN 4
                ELSE 5 -- This covers any other values that might appear
            END
        WHEN r.usage_disposition = 'Restricted' THEN
            CASE s.reuse_model
                WHEN 'Shared Platform' THEN 1
                WHEN 'Shared System' THEN 2
                WHEN 'Shared Code' THEN 3
                WHEN 'Shared Component' THEN 4
                ELSE 5 -- This covers any other values that might appear
            END
        WHEN r.usage_disposition = 'Emerging' THEN
            CASE s.reuse_model
                WHEN 'Shared Platform' THEN 1
                WHEN 'Shared System' THEN 2
                WHEN 'Shared Code' THEN 3
                WHEN 'Shared Component' THEN 4
                ELSE 5 -- This covers any other values that might appear
            END
        WHEN r.usage_disposition = 'Decommission' THEN
            CASE s.reuse_model
                WHEN 'Shared Platform' THEN 1
                WHEN 'Shared System' THEN 2
                WHEN 'Shared Code' THEN 3
                WHEN 'Shared Component' THEN 4
                ELSE 5 -- This covers any other values that might appear
            END
        WHEN r.usage_disposition = 'Prohibited' THEN
            CASE s.reuse_model
                WHEN 'Shared Platform' THEN 1
                WHEN 'Shared System' THEN 2
                WHEN 'Shared Code' THEN 3
                WHEN 'Shared Component' THEN 4
                ELSE 5 -- This covers any other values that might appear
            END
        ELSE 6 -- This covers any other values that might appear
    END,
    s.name;
