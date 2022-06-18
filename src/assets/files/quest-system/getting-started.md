# Quest System
## Introduction
Welcome to the JStudios Quest system asset pack, using this package you can set up quests and objectives for your project.
Its easy to set up and use following the steps listed below.


## Entities in the system
JStudios Quest system works with core entities to construct all quests, mostly in the form of a scriptable object.

### Quest context
A quest context is the game entity that the quest relates to, for example
* An apple item (collectable) is the context for a single objective quest that needs the player to collect some amount of apples
* An NPC can be a context for a quest that needs the player to talk to it

A context can be some scriptable object that implements <span class='link'>`IQuestContext`</span> and is assigned to the objective/quest but it can also be linked through a component on a game object called `QuestContextBehaviour`.

### Objective
An objective is the final data form that defines some task, for example
* collect 5 apples
* reach level 4
* talk to NPC

### Objective types
There are two types of objectives
1. Context objective - this objective will need to be contected to a context, either a
   scriptable object one or through a behaviour and will count the amount of times this context has been triggered.
   For example, every time an apple is collected, there will be an event triggered for that context and a context objective that is connected to a collectable item scriptable object of an apple will respond to it and count.
2. Action objective - this kind of objective will need a condition to satisfy in order to
   complete, the condition is custom writen by implementing an interface on a scriptable object.
   For example - An objective that completes when the player reaches level 4.

### Quest
A quest is essentially a collection of objectives, it can be a single objective quest or a multiple objective quest.
For multiple objective quests, objectives need to be assigned to the quest and for the single objective quest, the objective is automatically created and assigned to the quest.

### Quest types
There are several quests types that can be created :

#### Single objective quests (SOQ)
This quest type tracks a single objective and has 2 sub types
* Single objective context quest (Context quest)
* Single objective action quest (Action quest)
  Each types tracks an objective of its type respectivly, when creating this kind of quest the objectives are seemlesly created by the system and stored in the "Internal assets" folder of the asset pack.
  The quest is completed once the objective is completed.
  The SOQ, like the Objective implements an interface named `IObjective` and can be used in same cases in a similar way.
    
#### Multiple objective quests (MOQ)
This quest type track multiple objectives in 2 different manners:
* Async - Each objective progresses on its own without depending on other objectives being tracked by the quest.
* Sync - The objectives are tracked by their order in the list of objectives

 The quest is completed once all the objectives are completed.

### Quest states (ActiveState)
```cs
enum ActiveState  
{  
    PendingActive,  
    Active,  
    PendingCompleted,  
    Completed  
}
```

**PendingActive** : When the quest hasent yet started and is waiting to start

**Active** : When a quest has started and is listening to information from the game

**PendingCompleted** : Not all quests enter this state, only those who have "Complete Instantly" checkbox unchecked will enter this state once all the conditions for quest completion are met, in order to complete a quest in this state the user will need to trigger an event.

**Completed**: There are two ways to reach this state, if "Complete Instantly" checkbox is checked then once the quest conditions are met the quest will enter this state directly from "Active" state.
If the "Complete Instantly" checkbox is unchecked then the quest will enter "Pending Completed" before it will enter completed and the user will need to trigger an event to make the state transition.


### Quest Requirements
A quest can be given requirements to indicate if it is available for activation, for instance, some quests depend of something that has occured in the game for it to be available like the user reaching a level, or and area cleared etc.
Requirements are created by implementing an interface (`IRequirement`) on a scriptable object and assigning to the quest.

### Quest Completion Actions
A quest can be given custom actions to perform once it is completed, this is done by implementing an interface (`ICompletionAction`) on a scriptable object and assigning to the quest.
This can be used for example to grant EXP at the end of a quest.

### Quest System Core
This scriptable object manages the quest systems behind the scenes, it mainains overall health of the system and makes sure everything is in place.
Through here you will have access to the QuestList, ObjectiveList, QuestSystemChannel and the JSettings although it is not a best practice to use these references (Use the reference scriptable object for each of the above).

### Quest channel
The quest channel is the main source of communication with the quest system, when progress needs to be tracked or any quest/objective related events need to be listened to then the quest channel is the place to do it.
To access the quest channel you will to reference the quest channel reference: in the project window right click and then go to *Create/JStudios/Quest System/References/Channel*

You can make progress on a quest with the `Continue` function
`public void Continue(IQuestContext context = null, float amountOfProgress = 1)`

There are several ways to use this function
* `QuestChannelReference.Ref.Continue()` - Whenever some event occurs in your game that might have an effect on quest of type "Action quest" or MOQ that have objectives of type "Action Objective".
* `QuestChannelReference.Ref.Continue(context)` - this is an example of how to use the quest system when some context needs to be counted for example when a collectable has been collected.
* `QuestChannelReference.Ref.Continue(context, amount)` - this is used when a context needs to be counted but the addition is more than 1, the amount can also be a negative amount.
