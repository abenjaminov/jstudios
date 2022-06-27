# QuestSystemCore <span>ScriptableObject</span>

## Description
This is the quest systems' internal manager, it's an asset in the QuestSystem folder.
It's the systems' assets manager.

<div class='alert'>

## Important
If there is an unknown error, try using this assets' context menu 'Fix package'.

</div>

## Properties
<div class="public-properties-table">

| Name | Type | Description | Shown in inspector
|:--- |:---|:--- | :--- |
| J Settings | JSettings | Settings for the quest system | Yes |
| Objective List | ObjectiveList | A list of all <span class='jdl-questsystem-objectives-objective'>`Objective`</span> assets. | Yes |
| Quest List | QuestList | A list of all <span class='jdl-questsystem-quests-quest'>`Quest`</span> assets. | Yes |

</div>

## Methods
| Name | Returns | Params | Description |
|:--- |:---|:--- |:--- |
| Refresh | None. | None. | Refreshes the availability of all quests in the system. |
| Fix | None. | `string` - where the function was called from | Attempts in fixing any issues that break the quest system functionality internally. |
