// Test File
-- Create temporary table without ORDER BY
sql_solution_query := 'CREATE TEMP TABLE solution_capability_info AS ' || sql_solution_query || ';';

-- Insert into temporary table with ORDER BY
sql_solution_query := sql_solution_query || '
    INSERT INTO solution_capability_info 
    SELECT * FROM (
        SELECT *,
            CASE WHEN is_core_common = TRUE THEN 0 ELSE 1 END AS core_common_order,
            CASE UPPER(usage_disposition)
                WHEN ''REQUIRED'' THEN 1
                WHEN ''PREFERRED'' THEN 2
                WHEN ''RESTRICTED'' THEN 3
                WHEN ''EMERGING'' THEN 4
                WHEN ''DECOMMISSION'' THEN 5
                WHEN ''PROHIBITED'' THEN 6
            END AS disposition_order,
            CASE
                WHEN UPPER(usage_disposition) IN (''REQUIRED'', ''PREFERRED'', ''RESTRICTED'', ''EMERGING'', ''DECOMMISSION'', ''PROHIBITED'') THEN
                    CASE reuse_model
                        WHEN ''Shared Platform'' THEN 1
                        WHEN ''Shared System'' THEN 2
                        WHEN ''Shared Code'' THEN 3
                        WHEN ''Shared Component'' THEN 4
                    END
            END AS reuse_model_order
        FROM solution_capability_info
    ) AS sorted_solution_capability_info
    ORDER BY core_common_order, disposition_order, reuse_model_order, name;';

EXECUTE sql_solution_query;
