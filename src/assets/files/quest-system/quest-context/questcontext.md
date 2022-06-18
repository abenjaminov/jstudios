# IQuestContext

## Description
An interface that helps define the API for any object that should be part of a quest.
<br>It is the users responsability to generate unique ids for the contexts of their quests.
<br>The same id assigned to different contexts will make the Quest System behave in an unexpected way.

## Methods

| Name | Returns | Description |
|:---  |:--- |:-------------|
| `GetUniqueId` | string | Retreives a unique Id that represents this context, its used by the quest system to identify objective targets.|


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
TODO

### As a MonoBehaviour
If you have some GameObject that you with wish to set as a context for a quest<br>
for example a quest that is completed once the player talk to some NPC in the world
<br> refer to <span class='jstudios-docs-link-questsystem-introduction-questcontextbehaviour'>`QuestContextBehaviour`</span>
