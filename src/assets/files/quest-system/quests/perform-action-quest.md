# PerformActionQuest <span class='jdl-questsystem-quests-quest'>`Quest`</span>
## Description
This kind of <span class='jdl-questsystem-quests-quest'>`Quest`</span> responds to actions, it is set up with a <span class='jdl-questsystem-models-dummycontext'>`DummyContext`</span> internally.<br>
When you create this kind of quest instead of a context you will need to provide it with a <span class='jdl-questsystem-models-requirement'>`Requirement`</span>.<br>
The quest will be complete once the <span class='jdl-questsystem-models-requirement'>`Requirement`</span> is met.

<div class='alert'>

## Important
Changing any properties from the <span class='jdl-questsystem-quests-quest'>`Quest`</span> base class is not advised while using an instance of the `PerformActionQuest`.<br>
They are used mainly for internal purposes, use the api the inspector provides.

</div>

## Properties
<div class="public-properties-table">

| Name | Type | Description | Shown in inspector
|:--- |:---|:--- | :--- |
| CompletionRequirement | <span class='jdl-questsystem-models-requirement'>`Requirement`</span> | When this requirement is met then objective will change its state. | Yes |

</div>

## Methods

| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| Progress | None. | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span>, `float` | <span class='jdl-questsystem-quests-quest'>`Quest`</span> |

## Examples
First you will need to create a <span class='jdl-questsystem-models-requirement'>`Requirement`</span>, see the docs for more details.<br>
Next, assign the <span class='jdl-questsystem-models-requirement'>`Requirement`</span> you created to the `CompletionRequirement` property.<br>

<img src='assets/images/selectrequirementinactionquest.png' width="538" height="454">

