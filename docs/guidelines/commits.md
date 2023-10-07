---
---

# Richtlinien für Commits

## Convential Commits

Für alle unsere Projekte verfolgen wir im Groben die [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) Spezifikation. Diese Spezifikation beschreibt, wie ein Commit-Message aufgebaut sein muss.

### Aufbau

#### Commit-Prefix

Eine Commit-Message erhält stets einen Prefix. Dieser Prefix beschreibt, was für eine Art von Commit es ist. Ein Prefix wird immer klein geschrieben und wird von der eigentlichen Commit-Message durch ein Doppelpunkt getrennt.

Es gibt folgende Prefixe:

| Prefix     | Beschreibung                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------- |
| `feat`     | Ein neues Feature wurde hinzugefügt                                                               |
| `change`   | Ein bestehendes Feature wurde geändert                                                            |
| `fix`      | Ein Fehler wurde behoben                                                                          |
| `docs`     | Die Dokumentation wurde geändert                                                                  |
| `style`    | Es wurden Änderungen am Design vorgenommen (v.A. bei Grafischen Anwendungen)                      |
| `refactor` | Es wurden Änderungen am Code vorgenommen, die keine neuen Features hinzufügen oder Fehler beheben |
| `deps`     | Es wurden Änderungen an den Abhängigkeiten vorgenommen                                            |
| `content`  | Es wurden Änderungen am Inhalt vorgenommen, z.B. bei einer Website                                |
| `chore`    | Es wurden marginale Änderungen vorgenommen, welche bestehende Features nicht beeinflussen         |

#### Scope (optional)

Der Scope beschreibt, welcher Teil des Projektes betroffen ist. Dieser ist optional, da nicht immer ein Scope benötigt wird. Ein Scope wird in runden Klammern hinter dem Prefix angegeben.

Zum Beispiel:

```
feat(website): Neue Startseite hinzugefügt
```

#### Breaking Change (optional)

Ein Breaking Change ist eine Änderung, die bestehende Features beeinflusst. Diese Änderung kann z.B. dazu führen, dass bestehende Features nicht mehr funktionieren. Ein Commit kann als Breaking Change markiert werden, indem hinter dem Prefix ein `!` angegeben wird.

Zum Beispiel:

```
change!: Klasse User zu Klasse Users geändert

change(api)!: Endpoint von POST /api/user zu POST /api/users geändert
```

#### Commit-Message

Die Commit-Message beschreibt, was genau geändert wurde. Diese wird nach dem Prefix und dem Scope angegeben.

:::info
Die Commit-Message ist bevorzugt auf Englisch zu schreiben. Bei Projekten, die nur auf Deutsch sind, kann auch Deutsch verwendet werden.
:::

### Warum Conventional Commits?

Conventional Commits ist nicht nur ein Standard, der sich bei vielen Projekten durchgesetzt hat, sondern bietet auch Vorteile. Einerseits können Commits schnell kategoriesiert und verstanden werden. Weiterhin können aus den Commits automatisch Changelogs generiert werden (siehe [Release Please](release-please)). Außerdem können aus den Commits automatisch Versionsnummern generiert werden (siehe [Sementic Versioning](semver)).
