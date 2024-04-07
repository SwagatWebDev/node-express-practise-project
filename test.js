// Test File
Map<String, Integer> usageDispositionOrder = Map.of(
            "REQUIRED", 1,
            "PREFERRED", 2,
            "RESTRICTED", 3,
            "EMERGING", 4,
            "DECOMMISSION", 5,
            "PROHIBITED", 6
        );

        Map<String, Integer> reuseModelOrder = Map.of(
            "Shared Platform", 1,
            "Shared System", 2,
            "Shared Code", 3,
            "Shared Component", 4
        );

        return filterSolutions.stream()
                .sorted(Comparator.comparing((SolutionFilterResponse s) -> s.is_core_common() ? 0 : 1)
                        .thenComparing(Comparator.comparing((SolutionFilterResponse s) -> usageDispositionOrder.getOrDefault(s.getUsage_disposition().toUpperCase(), Integer.MAX_VALUE)))
                        .thenComparing((SolutionFilterResponse s) -> {
                            String reuseModel = s.getReuse_model();
                            return reuseModelOrder.getOrDefault(reuseModel, Integer.MAX_VALUE);
                        })
                        .thenComparing(SolutionFilterResponse::getName))
                .collect(Collectors.toList());
    }
