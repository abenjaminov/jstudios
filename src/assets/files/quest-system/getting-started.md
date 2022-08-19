# Quest System
## Introduction
Welcome to the JStudios Quest system asset pack, using this package you can set up quests and objectives for your project.

If you would like to download the Quest System asset pack by JStudios, you can do so in the link below 
<a></a>

After you have done so, we can start by creating our first quest.
We are going to create a quest that requires you to click on a button 2 times,
in order to complete it you would need to click on another button 3 times.

After you have reached the target (3 clicks), you would need to click on a 3rd button to complete it.
At the end we will print a message to the debugger console with real (fake) exp we grant the player.

It is important to note, there are many types of quests that you can create while using this asset pack, this tutoiral below demonstrates only a few abilities of the asset pack.

<div class="info">
    The example is available on a  <a href='https://github.com/abenjaminov/QuestSystemAssetGettingStarted/tree/main'>GitHub repository</a>, you can check it out but be aware that if you clone it, it will not work without the asset pack.
</div>

## Import package
To import the package you can open the package manager inside the unity editor and import it from "my assets"

## Setup the scene
Add 3 buttons to the scene, place them wherever you like.

<div class="img-container">
    <img src='assets/images/getting-started-setup-buttons.png' width="1103" height="406">
</div>

The first button will make our quest able to be activated.<br/>
Clicking the second button will be our quests objective.<br/>
The third button will make sure our quest is completed once the objective is done.

## Setup the Quest
From the project window add a new quest, go to Create -> JStudios -> Quest System -> Quests -> Single Objective Quest<br/>
In the inspector for the newly created quest, go to the objective info and change the raw target to 3.<br />
<div class="img-container">
    <img src='assets/images/getting-started-set-raw-target.png' width="336" height="358">
</div>

### Requirement
<div class="info">
    This step is for quests that need some kind of requirement to become active, for example if the player can receive some quest only after level 5.
</div>

Create a static class called `ButtonClickTracker` and add a static property `AmountOfClicks`;

```cs
// ButtonClickTracker.cs

public static class ButtonClickTracker
{
    public static int AmountOfClicks { get; set; }
}
```

Create another new Class script and call it `ButtonClickRequirement`, inherit from `ScriptableObject` and implement <span class='jdl-questsystem-models-requirement'>`IRequirement`</span><br />
1. Create an int property names "Amount". <br />
2. In the IsMet function check if the amount of clicks is equal or greater than the amount. <br />

```cs
// ButtonClickRequirement.cs

[CreateAssetMenu(menuName = "ButtonClickRequirement")]
public class ButtonClickRequirement : ScriptableObject, IRequirement
{
    public int Amount;
    
    public bool IsMet()
    {
        var isMet = ButtonClickTracker.AmountOfClicks >= Amount;

        return isMet;
    }
}
```
In order to make our quest apply this requirement on it, go to the project window and create a new asset from the scriptable object you just wrote.<br />
Go back to the project window and create a new `ButtonClickRequirement`, fill in the amount option.

<div class="img-container">
    <img src='assets/images/getting-started-create-requirement.png' width="340" height="191">
</div>

Now in our quest inspector, add a new "Require Before Active" item, click the + sign and then "Pick"<br />
you should see your newly created `ButtonClickRequirement`, select it by double clicking it.<br />

<div class="img-container">
    <img src='assets/images/getting-started-add-requirement.png' width="365" height="400">
</div>

You should see its name in the item box.

Now we would like to count the amount of clicks, lets create a new `MonoBehaviour` called `RequirementButton` and attach it to the first button.<br />
Implement a method called `OnButtonClicked` and link it to the click event of the first button from the scene.<br />
Every click increase `ButtonClickTracker.AmountOfClicks` by one.<br />
We also need to call <span class='jdl-questsystem-questsystemgeneral-questsystemcore'>`QuestSystemCore.RefreshSystem()`</span> (read the note below).

```cs
// RequirementButton.cs

public class RequirementButton : MonoBehaviour
{
    public void OnButtonClicked()
    {
        ButtonClickTracker.AmountOfClicks++;
        QuestSystemCore.RefreshSystem();
    }
}
```
<div class="info">
    It is advised to create a custom QuestSystemManager that listens to events from your game and calls the Refresh method<br />
    This is to create decoupling between the quest system and other components of your game.
</div>

#### Recap
We just create a requirement for our quest, by implement the interface <span class='jdl-questsystem-models-requirement'>`IRequirement`</span> we are able to write our own logic for entities in the system that have some kind of requirement like <span class='jdl-questsystem-quests-actionquest'>`ActionQuests`</span> and "Require Before Active" on any <span class='jdl-questsystem-quests-quest'>`Quest`</span>

### Completion Action
<div class="info">
    This step is for quests that need something to be done once they are completed (<span class='jdl-questsystem-models-activestate'>`ActiveState`</span> is "Completed"), skip to "Requirement" section if needed.<br />
</div>
<br />
Create a class class called GrantExpAction, inherit from ScriptableObject and implement <span class='jdl-questsystem-models-completionaction'>`ICompletionAction`</span>.<br />
1. Add CreateAssetMenu attribute. <br />
2. Add EXPAmount property. <br />
3. In the execute method, print to the debug log that EXP was granted. <br />

```cs
// GrantExpAction.cs

[CreateAssetMenu(menuName = "GrantExpAction")]
public class GrantExpAction : ScriptableObject, ICompletionAction
{
    public int EXPAmount;
    
    public void Execute()
    {
        Debug.Log($"Grant {EXPAmount} EXP");
    }
}

```
In order to set a completion action for our quest, we need to make an instance of this scriptable object. <br />
Go back to the project window and from the creation menu select your new GrantExpAction, fill in the amount of EXP you wish to grant when the quest completes.

<div class="img-container">
    <img src='assets/images/getting-started-grant-150-xp.png' width="336" height="197">
</div>

Go back to the inspector of the new quest you created and add a completion action, you can do this by adding 1 item to the "Completion Actions" list and then clicking on the "Pick" button. <br />
You should be able to see your newly created GrantExpAction asset, choose it by double clicking it. <br />
Now notice that the name appears in the item box on the quest.

<div class="img-container">
    <img src='assets/images/getting-started-add-completion-action.png' width="395" height="475">
</div>

Create a new script called `CompletionButton`.<br />
This script will manage activation and completion of the quest.
<div class="info">
It is advies that some custom QuestSystemManager will manage activation of quests instead of gameplay components. <br />
For the sake of the example this component will do it.
</div>

1. Save a prop of type Quest named QuestToComplete
2. In the `Awake` method subscribe to the `AvailabilityChangedEvent` on the quest so that it can be activated when it is available.
3. Create a method OnButtonClicked and once it is clicked call the Complete method on a quest (Notice this forces a complete state to a quest)
    2.1 You can add a check that the quest is ready for completion (only when Complete Instantly isnt ticked)

```cs
// CompletionButton.cs

public class CompletionButton : MonoBehaviour
{
    public Quest QuestToComplete;

    private void Awake()
    {
        QuestToComplete.OnAvailabilityChangedEvent += OnAvailabilityChangedEvent;
    }

    private void OnDestroy()
    {
        QuestToComplete.OnAvailabilityChangedEvent -= OnAvailabilityChangedEvent;
    }

    private void OnAvailabilityChangedEvent(Quest quest)
    {
        if (!quest.IsAvailable()) return;
        
        QuestToComplete.Activate();
    }

    public void OnButtonClicked()
    {
        if (QuestToComplete.State != ActiveState.PendingCompleted) return;
        
        QuestToComplete.Complete();
    }
}
```

Attach this component to the third button and the `OnButtonClicked` method to the click event of the button.

### Quest Context
The only thing left is to give our quest some context. <br />
The context will be the second button, since clicking on it will make the quest progress. <br />
Other examples for contexts can be some kind of enemy (since killing it will make progress), loot (since picking it up will make progress) etc.
<br />

So now lets attach a Quest Context Behaviour component to the second button, add an objective item and click "Pick", you should see your quest.<br />
Double click to pick it

<div class="img-container">
    <img src='assets/images/getting-started-context-behaviour.png' width="685" height="675">
</div>

Now you should see the quests name is set in the objective item.

Next create a new `MonoBehaviour` script `QuestButton` and attach it to the second button.
1. Add a prop to reference the <span class='jdl-questsystem-questsystemgeneral-questsystemchannel'>`QuestSystemChannel`</span> (You can create it from the project window)
2. In the awake method find the <span class='jdl-questsystem-questcontexts-questcontextbehaviour'>`QuestContextBehaviour`</span> Component (save as a prop)
3. Attach an `OnButtonClicked` method to the click event and inside the method call the `_questChannel.Ref().Progress()` method with your behaviour context.

```cs
// QuestButton.cs

public class QuestButton : MonoBehaviour
{
    private QuestContextBehaviour _context;
    [SerializeField] private QuestSystemChannelRef _questChannel;
    
    private void Awake()
    {
        _context = this.GetComponent<QuestContextBehaviour>();
    }

    public void OnButtonClicked()
    {
        _questChannel.Ref.Progress(_context);
    }
}
```

