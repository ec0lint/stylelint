# Managing issues

We manage issues consistently for the benefit of ourselves and our users.

## Labels

Use [labels](https://github.com/stylelint/stylelint/labels).

When you first triage an issue, you should:

- add one of the `status: needs *` labels, e.g. `status: need discussion`
- don't add any other label

After triage, you should add:

- _one_ of the non-need `status: *` labels, e.g. `status: ready to implement`
- _zero or one_ of the `type: *` labels, e.g. `status: new rule`
- _zero, one or more_ of the `syntax: *` labels, e.g. `syntax: scss`
- optionally, the `good first issue`, `help wanted`, `priority: high` and `upstream` labels

## Milestones

Use [milestones](https://github.com/stylelint/stylelint/milestones).

You should:

- use the `future-major` milestone for issues that introduce breaking changes
- optionally, create version milestones (e.g. `8.x`) to manage upcoming releases

## Titles

Rename the title into a consistent format.

You should:

- lead with the [CHANGELOG group names](pull-requests.md), but in the present tense:
  - "Remove y", e.g. "Remove unit-blacklist"
  - "Deprecate x in y", e.g. "Deprecate resolvedNested option in selector-class-pattern"
  - "Add y", e.g. "Add unit-blacklist"
  - "Add x to y", e.g. "Add ignoreProperties: [] to property-blacklist"
  - "Fix false positives/negatives for x in y", e.g. "Fix false positives for Less mixins in color-no-hex"
- use `*` if the issue applies to a group of rules, e.g. "Fix false negatives for SCSS variables in selector-\*-pattern"

## Saved replies

You should use [saved replies](https://help.github.com/en/github/writing-on-github/working-with-saved-replies).

### Close an issue

That does not use one of the templates:

```md
Thank you for creating this issue. However, issues need to follow one of our templates so that we can clearly understand your particular circumstances.

Please help us to help you by [recreating the issue](https://github.com/stylelint/stylelint/issues/new/choose) using one of our templates.
```

That is best-suited as a plugin:

```md
Thank you for your suggestion. I think this is an ideal [a plugin](https://github.com/stylelint/stylelint/blob/master/developer-guide/plugins.md).
```

### Label as ready to implement

That adds a new rule:

```md
I've labeled the issue as ready to implement. Please consider [contributing](https://github.com/stylelint/stylelint/blob/master/CONTRIBUTING.md) if you have time.

There are [steps on how to add a new rule](https://github.com/stylelint/stylelint/blob/master/docs/developer-guide/rules.md#add-a-rule) in the Developer guide.
```

That adds a new option to a rule:

```md
I've labeled the issue as ready to implement. Please consider [contributing](https://github.com/stylelint/stylelint/blob/master/CONTRIBUTING.md) if you have time.

There are [steps on how to add a new option](https://github.com/stylelint/stylelint/blob/master/docs/developer-guide/rules.md#add-an-option-to-a-rule) in the Developer guide.
```

That adds a bug in a rule:

```md
I've labeled the issue as ready to implement. Please consider [contributing](https://github.com/stylelint/stylelint/blob/master/CONTRIBUTING.md) if you have time.

There are [steps on how to fix a bug in a rule](https://github.com/stylelint/stylelint/blob/master/docs/developer-guide/rules.md#fix-a-bug-in-a-rule) in the Developer guide.
```

That is another type of improvement:

```md
I've labeled the issue as ready to implement. Please consider [contributing](https://github.com/stylelint/stylelint/blob/master/CONTRIBUTING.md) if you have time.
```