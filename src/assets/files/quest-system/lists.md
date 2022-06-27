# Asset Lists <span class='jdl-jstudios-general-lists'>`JAssetList`</span>

## Description
These are asset lists who collect all the assets of a type in the system and store them in a list for easier access.<br>

There are two types of lists in the `QuestSystem`.<br>

## 1. QuestList

### Methods

| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| GetQuestsByContext | <span class='jdl-questsystem-quests-quest'>`IEnumerable<Quest>`</span> | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span> | Returns all the quests that respond to the given context |
| GetAvailableQuests | <span class='jdl-questsystem-quests-quest'>`IEnumerable<Quest>`</span> | None | Returns all the quests that are available to activate. |
| GetQuestsByState | <span class='jdl-questsystem-quests-quest'>`IEnumerable<Quest>`</span> | <span class='jdl-questsystem-models-activestate'>`ActiveState`</span> | Returns all the quests that are currently in the given state |

## 2. ObjectiveList

### Methods

| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| GetObjectivesByContext | <span class='jdl-questsystem-objectives-objective'>`IEnumerable<Objective>`</span> | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span> | Returns all the objectives that respond to the given context |
| GetObjectivesByState | <span class='jdl-questsystem-objectives-objective'>`IEnumerable<Objective>`</span> | <span class='jdl-questsystem-models-activestate'>`ActiveState`</span> | Returns all the objectives that are currently in the given state |
