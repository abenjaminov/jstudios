# Quest <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span>

## Description
Base class for all quests, it is composed of multiple or single <span class='jdl-questsystem-objectives-objective'>`Objectives`</span> which determine its state.<br>

For more information regarding Properties/Methods/Events see inherited subclass <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span>

## Properties
<div class="public-properties-table">

| Name | Type | Description | Shown in inspector
|:--- |:---|:--- | :--- |
| RequireBeforeActive | <span class='jdl-questsystem-models-requirement'>`IEnumerable<Requirement>`</span> | The requirements needed for the quests state to become <span class='jdl-questsystem-models-activestate'>`ActiveState.Active`</span> | Yes |
| RawTarget | `float` | The sum of all the RawTargets of the quests' <span class='jdl-questsystem-objectives-objective'>`Objectives`</span> | Yes |

</div>

## Methods

| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| Refresh | None. | None. | Rechecks the availability of the quest. |
| IsAvailable | `bool` | None. | Checks if the quest is available for activation. |
| MeetsRequirements | `bool` | None. | Checks if the quest meets all the activation requirements. |
| SoftReset | None. | None. | Resets RawCompleted value and the <span class='jdl-questsystem-models-activestate'>`ActiveState`</span> |
| Progress | None. | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span>, `float` | See inherited subclasses for specifics and implementation regarding this method. |
| HasContext | `bool` | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span> | See inherited subclasses for specifics and implementation regarding this method. |

## Events
| Name | Args | Description
|:--- | :--- |:--- |
| OnAvailabilityChangedEvent | `Quest` | Triggers when the availability of the quest changes. |
