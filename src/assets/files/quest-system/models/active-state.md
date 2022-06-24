# ActiveState <span>enum</span>

# Description
Describes the state on any <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span>.<br>

```cs
public enum ActiveState
{
    PendingActive,
    Active,
    PendingCompleted,
    Completed
}
```

### PendingActive
When the <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span> does not yet respond to and progress.

### Active
Once the <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span> is activated using the `Active` method and is responding to progress.<br>

### PendingCompleted
This state is achieved once the `RawCompleted` is equal to the `RawTarget` (in other words, `PercentageCompelted` is 1.0)
AND if the `CompleteInstantly` property is marked as false.<br>
In this case the user will need to trigger `Complete` manually to reach the final state of the <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span>.

### Completed
When the <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span> is done, all <span class='jdl-questsystem-models-completionaction'>`CompletionActions`</span> have already been executed.
