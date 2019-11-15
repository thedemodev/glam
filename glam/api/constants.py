CHANNEL_NIGHTLY = 1
CHANNEL_BETA = 2
CHANNEL_RELEASE = 3

CHANNEL_CHOICES = (
    (CHANNEL_NIGHTLY, "nightly"),
    (CHANNEL_BETA, "beta"),
    (CHANNEL_RELEASE, "release"),
)
CHANNEL_NAMES = dict(CHANNEL_CHOICES)
CHANNEL_IDS = {v: k for k, v in CHANNEL_NAMES.items()}

AGGREGATION_HISTOGRAM = 1
AGGREGATION_PERCENTILE = 2
AGGREGATION_CHOICES = (
    (AGGREGATION_HISTOGRAM, "histogram"),
    (AGGREGATION_PERCENTILE, "percentiles"),
)
AGGREGATION_NAMES = dict(AGGREGATION_CHOICES)
AGGREGATION_IDS = {v: k for k, v in AGGREGATION_NAMES.items()}
