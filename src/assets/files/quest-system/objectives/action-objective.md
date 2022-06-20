# Action Objective <span class='jdl-questsystem-objectives-objective'>`Objective`</span>
## Description
This kind of <span class='jdl-questsystem-objectives-objective'>`Objective`</span> responds to actions, it is set up with a <span class='jdl-questsystem-models-dummycontext'>`DummyContext`</span> internally.<br>
When you create this kind of objective instead of a context you will need to provide it with a <span class='jdl-questsystem-models-requirement'>`Requirement`</span>.<br>
The objective will be complete once the <span class='jdl-questsystem-models-requirement'>`Requirement`</span> is met.

<div class='alert'>

## Important
Changing any properties from the <span class='jdl-questsystem-objectives-objective'>`Objective`</span> base class is not advised while using an instance of an action objective.<br>
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
| Report | None. | <span class='jdl-questsystem-questcontexts-questcontext'>`IQuestContext`</span>, `float` | for internal use. |

## Examples
TODO
