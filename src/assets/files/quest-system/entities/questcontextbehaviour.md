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
[DisallowMultipleComponent]
[ExecuteAlways]
public class QuestContextBehaviour : MonoBehaviour, IQuestContext {}
```

### Attributes
#### 1. [ExecuteAlways](https://docs.unity3d.com/ScriptReference/ExecuteAlways.html)
This is needed for the generation of the unique id to occur in the OnAwake method and for the GameObject to be set as a context to the linked quests / objectives

#### 2. [DisallowMultipleComponent](https://docs.unity3d.com/ScriptReference/DisallowMultipleComponent.html)
This is needed for the generation of the unique id to occur in the OnAwake method and for the GameObject to be set as a context to the linked quests / objectives

## Examples

To use this, select your game object in the scene and through the inspector add as a component.<br>
Once it is assigned it can be used like any MonoBehaviour.
Don't forget to link `SingleObjectiveQuests` or <span class='jstudios-docs-link-questsystem-introduction-objective'>`Objectives`</span> to this MonoBehaviour through the `Objectives` field in the inspector.

In our example project, for some of our quests we would like to track the distance covered by the snake,<br>
to do this we need the `SnakeMovement` MonoBehaviour to notify the quest system once it has moved, and the context for these quests is the snake itself.

To set this up we need to do two things,<br>
First - Add the `QuestContextBehaviour` component to the snake and link the quest / objective to it.<br>
Second - Write code that updates the QuestSystem once the snake has traveled distance like so :<br> 

```cs
public class SnakeMovement : MonoBehaviour {
  private QuestContextBehaviour _movementContext;
  
  [SerializeField] private QuestSystemChannelRef QuestSystemChannel;
  
  private void Awake()
  {
    _movementContext = GetComponent<QuestContextBehaviour>();
  }
  
  OnMoved(float deltaTraveled) 
  {
    QuestSystemChannel.Ref.Continue(_movementContext, deltaTraveled);
  }
}
```
