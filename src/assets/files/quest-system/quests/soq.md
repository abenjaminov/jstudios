# Single Objective Quest <span class='jdl-questsystem-quests-quest'>`Quest`</span>

## Description

This quest is assembled from only one <span class='jdl-questsystem-objectives-objective'>`Objective`</span>.<br>
The `SingleObjectiveQuest` class implements the <span class='jdl-questsystem-objectives-iobjective'>`IObjective`</span> interface so it can be used on a <span class='jdl-questsystem-questcontexts-questcontextbehaviour'>`QuestContextBehaviour`</span>.<br>

To create a Single Objective Quest go to: AssetMenu &rarr; JStudios &rarr; Quest System &rarr; Quests &rarr; Single Objective Quests &rarr; Quest<br>

For more information regarding Properties/Methods/Events see inherited subclass <span class='jdl-questsystem-quests-quest'>`Quest`</span>.

## Properties
<div class="public-properties-table">

| Name | Type | Description | Shown in inspector
|:--- |:---|:--- | :--- |
| Objective | <span class='jdl-questsystem-objectives-objective'>`Objective`</span> | The Objective of the quest, all the information can be viewed from the inspector | Yes |

</div>

## Methods

| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| HasContext | `bool` | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span> | Checks if the context sent is the one the this quest responds to. |
| Progress | None. | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span>, `float` | If the context is the one that this quest responds to then progress will be made by the amount provided. |
| SoftReset | None. | None. | Resets progress and state. |
| SetContext | None. | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span>, `bool` | See <span class='jdl-questsystem-objectives-iobjective'>`IObjective`</span> for more information |
| ClearContext | None. | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span> | See <span class='jdl-questsystem-objectives-iobjective'>`IObjective`</span> for more information |
| GetUniqueId | `string` | None. | See <span class='jdl-questsystem-objectives-iobjective'>`IObjective`</span> for more information |
