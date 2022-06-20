# IQuestContext <span>Interface</span>

## Description
An interface that helps define the API for any object that should be part of a quest.
<br>It is the users responsability to generate unique ids for the contexts of their quests.
<br>The same id assigned to different contexts will make the Quest System behave in an unexpected way.

## Public Methods

| Name | Returns | Description |
|:---  |:--- |:-------------|
| GetUniqueId | string | Retreives a unique Id that represents this context, its used by the quest system to identify objective targets.|


## Examples

### As a ScriptableObject
Here we are defining some item that can be picked up by the player, this context will be <br>
for example, assigned to some quest or objective that is completed when the player picks up a certain amount
<br> of this item.
<br> The context can be assigned through the editor.
```cs
public class InventoryItem : ScriptableObject, IQuestContext 
{
  public string UniqueId;
  
  public string GetUniqueId() 
  {
    return this.UniqueId;
  }
}
```

#### Assignment
To assign a `QuestContext` that is a ScriptableObject, link it directly to the Context field on the <span class='jdl-questsystem-quests-quest'>`Quest`</span> / <span class='jdl-questsystem-objectives-objective'>`Objective`</span>

### As a MonoBehaviour
If you have a GameObject that you wish to set as a context for a <span class='jdl-questsystem-quests-quest'>`Quest`</span> / <span class='jdl-questsystem-objectives-objective'>`Objective`</span><br>
for example a quest that is completed once the player talk to some NPC in the world
<br> refer to <span class='jdl-questsystem-introduction-questcontextbehaviour'>`QuestContextBehaviour`</span>
