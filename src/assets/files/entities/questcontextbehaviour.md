# QuestContextBehaviour
## Description
This is a MonoBehaviour (Component) assigned to a game object so that it can become a context for a quest or and objective.
<br> There can only

## Public Properties
<div class="public-properties-table">

| Name | Type | Description | Shown in inspector
|:--- |:---|:--- | :--- |
| ContextName | `string` | This property exists for the user in order to help with debugging and organizing, it has no actual use for the QuestSystem and can be ignored. | Yes |
| Objectives | `IEnumerable<IObjective>` | List of the objectives / quests that this GameObject will be used as a context for. | Yes |

</div>

## Public Methods

| Name | Returns | Description
|:--- |:---|:--- |
| SetAsContextFor | void | The GameObject can be added as a context for any quest / objective dynamically at runtime using this function. |

## Context Menu
| Menu Path | Description |
|:--- |:-------------|
| JStudios / Generate unique id | Generates a new unique id for the GameObject|

## Aditional Info

### Definition
```cs
[ExecuteAlways]
public class QuestContextBehaviour : MonoBehaviour, IQuestContext {}
```

### Attributes
#### 1. [ExecuteAlways](https://docs.unity3d.com/ScriptReference/ExecuteAlways.html)
This is needed for the generation of the unique id to occur in the OnAwake method and for the GameObject to be set as a context to the linked quests / objectives

## Examples
#### Usage
#### Assignment
