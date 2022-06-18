# IObjective

## Description
This interface defines the api for an objective in the system.<br>
An objective is a piece of data that defines some task that needs to be done.

Two entities in the system implement this interface: <span class='jstudios-docs-link-questsystem-objectives-objective'>`Objective`</span> and <span class='jstudios-docs-link-questsystem-quests-soq'>`SingleObjectiveQuest`</span><br>
Both of these entities can be used on the <span class='jstudios-docs-link-questsystem-questcontext-questcontextbehaviour'>`QuestContextBehaviour`</span>

## Public Methods
| Name | Returns | Params | Description
|:--- |:---|:--- | :--- |
| SetContext | `void` | `IQuestContext` - This is the context the objective will respond to.<br>`boolean` - Default is false, marks if the context is from the scene or not (ScriptableObject). | This property exists for the user in order to help with debugging and organizing, it has no actual use for the QuestSystem and can be ignored. |
| ClearContext | `void` | `IQuestContext` - DESC. | List of the objectives / quests that this GameObject will be used as a context for. |
| GetUniqueId | `string` | None. | List of the objectives / quests that this GameObject will be used as a context for. |
