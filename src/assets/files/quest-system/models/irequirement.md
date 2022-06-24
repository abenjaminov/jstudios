# IRequirement <span>interface</span>

## Description
This interface will work as requirement for availability of a <span class='jdl-questsystem-quests-quest'>`Quest`</span> (`RequireBeforeActive`) and also <br>
as a requirement for <span class='jdl-questsystem-objectives-actionobjective'>`ActionObjective`</span> or <span class='jdl-questsystem-quests-actionquest'>`ActionQuest`</span>.

## Methods
| Name | Returns | Params | Description
|:--- |:---|:--- |:--- |
| IsMet | `bool` | None. | Return true if the requirement is met. |

## Examples
In our example we would like to create a quest that is completed once the user reaches a certain level<br>
for this we would like to create a `IRequirement` that checks if the player reached a certain level.

```cs
CreateAssetMenu(...)]
    public class LevelRequirement : ScriptableObject, IRequirement
    {
        public PlayerStats PlayerStats;
        public int RequiredLevel;
        
        public bool IsMet()
        {
            var isMet = PlayerStats.Level >= RequiredLevel;

            return isMet;
        }
    }
```

This can be used as a <span class='jdl-questsystem-quests-actionquest'>`ActionQuest`</span> that is "Reach Level 4".<br>
This can also be used as a requirement for any quest availability (using `RequireBeforeActive` property).
