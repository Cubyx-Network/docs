# Richtlinie für Pull Requests

## Was ist ein Pull Request?

Gerade bei großen Projekten ist es wichtig einen Überblick zu behalten und schadhafte Änderungen auf dem main-Branch zu vermeiden. Aus diesem Grund werden neue Features oder Bugfixes zunächst auf einem seperaten Branch entwickelt. Wenn die Änderungen fertig sind, wird ein Pull Request erstellt. Dieser Pull Request wird dann von einem Maintainer geprüft und anschließend gemerged. Dabei wird der Code auf dem main-Branch aktualisiert und die Änderungen sind für alle sichtbar.

## Was sollte beachtet werden?

### Erstellung

Ein Pull Request braucht zu aller erst einen Titel. Dieser sollte in wenigen Worten die Änderung beschreiben. Das [Conventional Commits](commits)-Format sollte dabei auch hier eingehalten werden. Außerdem sollte der Pull Request eine Beschreibung haben, die die Änderungen genauer beschreibt.

Oftmals entstehen Pull Requests aus Issues heraus. In diesem Fall sollte der Pull Request mit dem Issue verlinkt werden. Dazu muss einfach das Issue mit einem Keyword in der Beschreibung verlinkt werden. Eine Übersicht über die Keywords gibt es [hier](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).

Wenn möglich sollte der Pull Request auch den bestehenden Labels zugeordnet werden. Diese helfen dabei, den Pull Request zu kategorisieren und zu priorisieren. Sollte ein Entwickler nicht die Berechtigung haben, Labels zu setzen, wird dies von einem Maintainer übernommen.

```
fix: Rechtschreibfehler in der README.md behoben

In der README.md war ein Rechtschreibfehler. Dieser wurde behoben.
fixes #123

Labels: bug, documentation
```

### Review

Damit nicht ungewollte Änderungen auf den main-Branch gelangen, sollte jeder Pull Request von mindestens einem Maintainer gesichtet werden. Dabei wird der Code auf Fehler und Sicherheitslücken geprüft. Außerdem wird geprüft, ob der Code den Richtlinien entspricht. Sollte der Code nicht den Richtlinien entsprechen, wird der Pull Request abgelehnt oder der Maintainer fordert Änderungen an. Sollte der Pull Request abgelehnt werden, wird dies mit einem Kommentar begründet.

### CI und Checks

Oftmals werden bei Pull Requests automatische Tests ausgeführt. Diese Tests prüfen, ob der Code den Richtlinien entspricht und ob der Code funktioniert. Sollte ein Test fehlschlagen, wird der Pull Request nicht gemerged. In diesem Fall sollte der Entwickler den Fehler beheben und den Pull Request erneut erstellen.

### Merge

Kann ein Pull Request germerged werden, wird dies von einem Maintainer übernommen. Dabei werden die Änderungen auf den main-Branch übertragen. Anschließend wird der Pull Request geschlossen und der damit verbundene Branch gelöscht.

:::note
Damit keine Probleme mit der Changelog-Generierung entstehen, sollte der Pull Request mit der Squash-Option gemerged werden. Dabei werden alle Commits zu einem Commit zusammengefasst, welcher den [Conventional Commits](commits)-Richtlinien entspricht.
Dieser Commit wird dann als Merge-Commit verwendet und erscheint im Changelog.
:::
