# Multiple Objective Quest <span class='jdl-questsystem-quests-quest'>`Quest`</span>

This quest is assembled from multiple <span class='jdl-questsystem-objectives-objective'>`Objectives`</span>.<br>
There are two types of MultipleObjectiveQuests - see information below.

## Properties
<div class="public-properties-table">

| Name | Type | Description | Shown in inspector
|:--- |:---|:--- | :--- |
| Objectives | <span class='jdl-questsystem-objectives-objective'>`List<Objective>`</span> | The list of all the objectives composing the quest. | Yes |
| ObjectiveCount | `int` | Length of the objective list | No |
| CompletedObjectiveCount | `int` | Amount of completed objectives from the list. | No |

</div>

## Methods

| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| Progress | None. | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span>, `float` | The `Progress` method for every <span class='jdl-questsystem-objectives-objective'>`Objective`</span> related to the quest that has the provided context related to him will be called. |
| HasContext | `bool` | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span> | Checks if the context sent has any <span class='jdl-questsystem-objectives-objective'>`Objective`</span> that responds to it. |
| SoftReset | None. | None. | Calls the `SoftReset` method on every <span class='jdl-questsystem-objectives-objective'>`Objective`</span> in this quest. |

## More Information

### Types of Multiple Objective Quests
#### Async Quest
This quest runs all <span class='jdl-questsystem-objectives-objective'>`Objectives`</span>  which means that once it is turned <span class='jdl-questsystem-models-activestate'>`Active`</span>, all the objectives are also turned <span class='jdl-questsystem-models-activestate'>`Active`</span>
and respond to progress with the correct <span class='jdl-questsystem-questcontexts-questcontext'>`Context`</span> regardless of other <span class='jdl-questsystem-objectives-objective'>`Objectives`</span> state.

To create an Async Quest go to: AssetMenu &rarr; JStudios &rarr; Quest System &rarr; Quests &rarr; Multiple Objective Quests &rarr; Async Quest<br>

#### Sync Quest
This quest runs all <span class='jdl-questsystem-objectives-objective'>`Objectives`</span> synchronously which means only once an <span class='jdl-questsystem-objectives-objective'>`Objective`</span> is <span class='jdl-questsystem-models-activestate'>`Completed`</span> then the next won becomes <span class='jdl-questsystem-models-activestate'>`Active`</span><br>
The order is the same order that the objectives appear in the list.

To create a Sync Quest go to: AssetMenu &rarr; JStudios &rarr; Quest System &rarr; Quests &rarr; Multiple Objective Quests &rarr; Sync Quest<br>

### How the quests' state is determined

Whenever an <span class='jdl-questsystem-objectives-objective'>`Objectives'`</span> state is changed the quest will recalculate its <span class='jdl-questsystem-models-activestate'>`ActiveState`</span> according to the following method:<br>
1. If all the <span class='jdl-questsystem-objectives-objective'>`Objectives`</span> are <span class='jdl-questsystem-models-activestate'>`PendingActive`</span> then the quest will also be <span class='jdl-questsystem-models-activestate'>`PendingActive`</span>.
2. If there are any <span class='jdl-questsystem-models-activestate'>`Active`</span> <span class='jdl-questsystem-objectives-objective'>`Objectives`</span> then the quest will become <span class='jdl-questsystem-models-activestate'>`Active`</span> aswell.
3. If there are no <span class='jdl-questsystem-objectives-objective'>`Objectives`</span> that are <span class='jdl-questsystem-models-activestate'>`PendingActive`</span> or <span class='jdl-questsystem-models-activestate'>`Active`</span> and there are some <span class='jdl-questsystem-objectives-objective'>`Objectives`</span> that are <span class='jdl-questsystem-models-activestate'>`PendingCompleted`</span> then the quests' state will also be <span class='jdl-questsystem-models-activestate'>`PendingCompleted`</span>
4. Once all <span class='jdl-questsystem-objectives-objective'>`Objectives`</span> are <span class='jdl-questsystem-models-activestate'>`Completed`</span> then the quest will also be <span class='jdl-questsystem-models-activestate'>`Completed`</span>

