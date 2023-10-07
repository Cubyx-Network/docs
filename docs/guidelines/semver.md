# Semantic Versioning (SemVer)

In praktisch allen Projekten gibt es eine Versionsnummer. Diese Versionsnummer gibt an, welche Version des Projektes vorliegt. Cubyx verfolgt dabei die [Semantic Versioning](https://semver.org/)-Spezifikation.

## Was ist SemVer?

SemVer ist eine Spezifikation, die beschreibt, wie Versionsnummern aufgebaut sein müssen. Diese Spezifikation wird von vielen Projekten verwendet, um Versionsnummern zu generieren. Die Spezifikation ist unter [semver.org](https://semver.org/) zu finden.

## Aufbau

Eine Versionsnummer besteht aus drei Teilen: `MAJOR.MINOR.PATCH`. Diese Teile werden durch einen Punkt getrennt. Jeder Teil besteht aus einer Zahl. Die Teile haben folgende Bedeutung:

| Teil  | Bedeutung                                                           | Erläuterung                                                                                                   |
| ----- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Major | Eine neue Version, die nicht abwärtskompatibel ist.                 | Hier wurden große Änderungen vorgenommen, die dazu führen, dass bestehende Features nicht mehr funktionieren. |
| Minor | Eine neue Version, die abwärtskompatibel ist.                       | Hier wurden z.B. neue Features hinzugefügt.                                                                   |
| Patch | Eine neue Version, die abwärtskompatibel ist und nur Fehler behebt. | Hier wurden Fehler behoben und kleine, geringfügige Änderungen vorgenommen.                                   |

## Warum SemVer?

SemVer ist ein Standard, der sich bei vielen Projekten durchgesetzt hat. Er bietet den Vorteil, dass Versionsnummern schnell verstanden werden können. Außerdem können aus den Commits automatisch Versionsnummern generiert werden (siehe [Conventional Commits](commits)).
