# Automatische Changelogs mit Release Please

## Was ist Release Please?

Release Please ist ein Tool, welches automatisch Changelogs für GitHub Repositories erstellt und wurde von Google entwickelt. Es ist Open Source und kann unter [github.com/googleapis/release-please](https://github.com/googleapis/release-please) eingesehen werden. Vor allem in größeren Projekten kommt das Tool bei Cubyx zum Einsatz, um die Changelogs schnell und einfach zu erstellen.

## Wie funktioniert Release Please?

Release Please verwendet die [Conventional Commits](commits)-Spezifikation, um Changelogs zu generieren. Dabei werden die Commits des main-Branches anhand ihrer [Prefix](commits#commit-prefix) kategorisiert. Release Please erkennt dabei automatisch, ob es sich um einen Patch, Minor oder Major Release handelt. Anschließend wird ein Pull Request erstellt, der die Änderungen enthält. Dieser Pull Request kann dann von einem Maintainer gemerged werden.

:::warning
Release Please kennt keine Ausnahmen. Wenn ein Commit nicht den Conventional Commits entspricht, wird er nicht in den Changelog aufgenommen. Es ist daher wichtig, dass alle Commits den Conventional Commits entsprechen.

Außerdem sollte man beachten, dass alles was auf den main-Branch commited wird, automatisch in den Changelogs landet. Man sollte also achtsam sein, was man wie commited.
:::

Neben der Kategorisierung werden auch die [Scopes](commits#commit-scope) verwendet, diese werden in fetter Schrift vor dem Changelog-Eintrag angezeigt.

Außerdem wird die Versionsnummer automatisch erhöht. Release Please erkennt dabei automatisch, ob es sich um einen Patch, Minor oder Major Release handelt. Für weitere Informationen siehe [Semantic Versioning](semver).
