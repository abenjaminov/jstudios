# ICompletionAction <span>interface</span>

## Description
This interface will work as a `CompletionAction` for a <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span>.

## Methods
| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| Execute | None. | None. | Executes the intended action |

## Examples

In our example we would like to grant the player some amount on points when completing a quest<br>
to do this we will create a `ScriptableObject` that will implement <span class='jdl-questsystem-models-completionaction'>`ICompletionAction`</span>.<br>
The `GrantPointsAction` class will implement logic to grant the player points once it is executed.
```cs
[CreateAssetMenu(...)]
public class GrantPointsAction : ScriptableObject, ICompletionAction
{
    public PlayerStats PlayerStats;
    public int AmountOfPoints;
    
    public void Execute()
    {
        PlayerStats.GrantPoints(AmountOfPoints);
    }
}
```

Now we just to create an asset in our project window and add it to the `CompletionActions` of the relevant <span class='jdl-questsystem-models-questsystemasset'>`QuestSystemAsset`</span>.
