# QuestContextBehaviour <span>MonoBehaviour</span>
## Description
This is a MonoBehaviour (Component) assigned to a game object so that it can become a context for a quest or and objective.
<br> There can only

## Properties
<div class="public-properties-table">

| Name | Type | Description | Shown in inspector
|:--- |:---|:--- | :--- |
| ContextName | `string` | This property exists for the user in order to help with debugging and organizing, it has no actual use for the QuestSystem and can be ignored. | Yes |
| Objectives | <span class='jdl-questsystem-objectives-iobjective'>`IEnumerable<IObjective>`</span> | List of the objectives / quests that this GameObject will be used as a context for. | Yes |

</div>

## Methods

| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| SetAsContextFor | void | <span class='jdl-questsystem-objectives-iobjective'>`IObjective`</span> | The GameObject can be added as a context for any <span class='jdl-questsystem-quests-quest'>`Quest`</span> / <span class='jdl-questsystem-objectives-objective'>`Objective`</span> dynamically at runtime using this function. |

## Context Menu
| Menu Path | Description |
|:--- |:-------------|
| JStudios / Generate unique id | Generates a new unique id for the GameObject|

## Attributes
### [ExecuteAlways](https://docs.unity3d.com/ScriptReference/ExecuteAlways.html)
This is needed for the generation of the unique id to occur in the OnAwake method and for the GameObject to be set as a context to the linked quests / objectives

## Examples

To use this, select your game object in the scene and through the inspector add as a component.<br>

<img src='assets/images/addbehaviourascomponent.png' width="736" height="507">

Once it is assigned it can be used like any MonoBehaviour.<br>
Don't forget to link <span class='jdl-questsystem-quests-quest'>`SingleObjectiveQuests`</span> or <span class='jdl-questsystem-introduction-objective'>`Objectives`</span> to this MonoBehaviour through the `Objectives` field in the inspector.

<img src='assets/images/linkiobjective.png' width="701" height="298">

In our example project, for some of our quests we would like to track the distance covered by the snake,<br>
to do this we need the `SnakeMovement` MonoBehaviour to notify the quest system once it has moved, and the context for these quests is the snake itself.

To set this up we need to do two things,<br>
First - Add the `QuestContextBehaviour` component to the snake and link the <span class='jdl-questsystem-quests-quest'>`Quest`</span> / <span class='jdl-questsystem-objectives-objective'>`Objective`</span> to it.<br>
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
    QuestSystemChannel.Ref.Report(_movementContext, deltaTraveled);
  }
}
```
