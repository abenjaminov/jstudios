# Objective <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span>

## Description
This is the building block for any quest, its is here where you can define the logic of the quest. <br>
To create a Context Objective go to: AssetMenu &rarr; JStudios &rarr; Quest System &rarr; Objectives &rarr; Objective<br>

For more information see inherited subclass <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span>

## Properties
<div class="public-properties-table">

| Name | Type | Description | Shown in inspector
|:--- |:---|:--- | :--- |
| PreviousRawCompleted | `float` | The value of RawCompleted from <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span> before the current value| Yes |
| Context | <span class='jdl-questcontexts-questcontext'>`IQuestContext`</span> | The context the objective responds to. | Yes |
| CompleteInstantly | `bool` | Defines the next state for the objective once the target is reached, if marked the next state will be <span class='jdl-questsystem-models-activestate'>`ActiveState.Completed`</span>, otherwise <span class='jdl-questsystem-models-activestate'>`ActiveState.PendingCompleted`</span> | Yes |

</div>

## Methods

| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| GetUniqueId | `string` | None. | See <span class='jdl-questsystem-objectives-iobjective'>`IObjective`</span> for more information |
| SetContext | None. | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span>, `bool` | See <span class='jdl-questsystem-objectives-iobjective'>`IObjective`</span> for more information |
| ClearContext | None. | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span> | See <span class='jdl-questsystem-objectives-iobjective'>`IObjective`</span> for more information |
| HasContext | `bool` | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span> | Checks if the current objective responds to the given context |
| Progress | None. | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span>, `float` | If the context is the one that this objective responds to then progress will be made by the amount provided. |
| SoftReset | None. | None. | Resets progress and state. |
| ReadyForComplete | None. | None. | Set the state of the objective to  <span class='jdl-questsystem-models-activestate'>`ActiveState.PendingCompleted`</span>|
| Complete | None. | None. | Sets the PreviousRawCompleted to be equal to the RawCompleted and calls the base class Complete method (See title) |

## Examples
TODO

## Sub Classes
`ActionObjective` 

