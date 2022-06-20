# Quest System Asset <span>ScriptableObject</span>

## Description

## Properties

| Name | Type | Description | Shown in inspector
|:--- |:---|:--- | :--- |
| UniqueId | `string` | Unique GUID generated by the asset list created by the QuestSystem | No
| Name | `string` | Just the name | Yes
| CompletionActions | <span class='jdl-questsystem-models-completionactions'>`IEnumerable<ICompletionAction>`</span> | Action to be performed once the objective changes its state to <span class='jdl-questsystem-models-activestate'>`ActiveState.Completed`</span>. | Yes
| RawTarget | `float` | The target value for the objective | Yes |
| RawCompleted | `float` | How much of the target has been complete as a raw value | Yes
| PercentageCompleted | `float` | How much of the target has been completed as a percentage value, between 0 and 1 | No
| ActiveState (State) | <span class='jdl-questsystem-models-activestate'>`ActiveState`</span> | The state of the objective | Yes
| HideFromList | `bool` | Hide this objective from the asset list | Yes

## Methods
| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| Start | None. | None. | Sets the state to <span class='jdl-questsystem-models-activestate'>`ActiveState.Active`</span>, and performs specific activation logic in the subclasses. |
| Complete | None. | None. | Set the state to <span class='jdl-questsystem-models-activestate'>`ActiveState.Completed`</span>, invokes all the <span class='jdl-questsystem-models-completionaction'>`CompletionActions`</span> |

## Events
| Name | Args | Description
|:--- | :--- |:--- |
| OnStateChangedEvent | Objective | After the state on the objective is changed this event is invoked. |
| OnProgressEvent | Objective | After progress has been changed this event is invoked (State has not changed yet). |
| OnActiveEvent | Objective | This is invoked right after the OnStateChangedEvent if the new state is <span class='jdl-questsystem-models-activestate'>`ActiveState.Active`</span> |
| OnPendingCompletedEvent | Objective | This is invoked right after the OnStateChangedEvent if the new state is <span class='jdl-questsystem-models-activestate'>`ActiveState.PendingCompleted`</span> |
| OnCompletedEvent | Objective | This is invoked right after the OnStateChangedEvent if the new state is <span class='jdl-questsystem-models-activestate'>`ActiveState.Completed`</span> |

## Sub Classes
<span class='jdl-questsystem-objectives-objective'>`Objective`</span><br>
<span class='jdl-questsystem-quests-quest'>`Quest`</span>