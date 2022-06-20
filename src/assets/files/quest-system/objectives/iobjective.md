# IObjective <span>Interface</span>

## Description
This interface defines the api for an objective in the system.<br>
An objective is a piece of data that defines some task that needs to be done.

Two entities in the system implement this interface: <span class='jdl-questsystem-objectives-objective'>`Objective`</span> and <span class='jdl-questsystem-quests-soq'>`SingleObjectiveQuest`</span><br>
Both of these entities can be used on the <span class='jdl-questsystem-questcontext-questcontextbehaviour'>`QuestContextBehaviour`</span>

Usages for this interface are mainly internal to the system.

## Methods
| Name | Returns | Params | Description
|:--- |:---|:--- | :--- |
| SetContext | `void` | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span> - This is the context the objective will respond to.<br>`boolean` - Default is false, marks if the context is from the scene or not (ScriptableObject). | This property exists for the user in order to help with debugging and organizing, it has no actual use for the QuestSystem and can be ignored. |
| ClearContext | `void` | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span> - If the context sent as a param is the related context then it is cleared. | List of the objectives / quests that this GameObject will be used as a context for. |
| GetUniqueId | `string` | None. | List of the objectives / quests that this GameObject will be used as a context for. |
