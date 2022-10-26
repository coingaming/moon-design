module.exports = {
    "extends": ["@commitlint/config-conventional"],
    "rules": {
        "type-enum": [
            2,
            "always",
            [
                "build",
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test",
                "button"
            ]
        ],
        "body-full-stop": [
            2,
            "never",
            "."
        ],
        "scope-empty": [2, "never"],
    }
};
