# QuestSystemChannel <span>ScriptableObject</span>

## Description
This is the main asset for communicating with the quest system from the outside, all the assets in the system are linked to it (<span class='jdl-questsystem-quests-quest'>`Quests`</span> and <span class='jdl-questsystem-objectives-objective'>`Objectives`</span>).<br>

The asset is created by default by the <span class='jdl-questsystem-questsystemgeneral-questsystemcore'>`QuestSystemCore`</span> and exists in the main folder.<br>

<div class='alert'>

## Important
If you would like to use this asset, it is HIGHLY advised to use the <span class='jdl-jstudios-general-references'>`JInternalAssetReference`</span> to it by creating it <br>
go to AssetMenu &rarr; JStudios &rarr; Quest System &rarr; References &rarr; Channel<br>

You can then link it to any asset / behaviour and use it in the following manner : 
```cs

public class MyBehaviour : MonoBehaviour 
{
  [SerializeField] private QuestSystemChannelRef QuestSystemChannel;
  
  public void SomeAction() 
  {
    var someContext = this.GetContext();
    
    QuestSystemChannel.Ref.Progress(someContext);
  }

  IQuestContext GetContext() 
  {
    // return some quest context
  }
}

```

</div>
