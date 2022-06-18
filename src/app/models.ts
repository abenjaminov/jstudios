export enum StudioItemType {
  link,
  docs
}

export class StudioItemInfo {
  name: string;
  key:string;
  description: string;
  icon: string;
  type: StudioItemType;
  context: any;
}

export const studioItemsConfiguration: Array<StudioItemInfo> = [{
  name: "Implementing a scalable quest system",
  key: 'implemetingascalablequestsystem',
  icon: 'fa-brands fa-medium',
  type: StudioItemType.link,
  description: 'Medium article discussing a possible implementation for a quest system in Unity.',
  context: 'https://medium.com/@asaf.j.benjaminov/implementing-a-scalable-quest-system-7f36ea4cfe22'
},
  {
    name: 'Quest System asset pack',
    key: 'questsystem',
    icon: 'fa-brands fa-unity',
    type: StudioItemType.docs,
    description: 'A highly scalable quest system asset pack for Unity.',
    context: [{
      name: 'Introduction',
      key: 'introduction',
      items: [{
        name: 'Getting started',
        key: 'gettingstarted',
        mdFilePath: '../../../assets/files/quest-system/getting-started.md'
      }]
    },{
      name: 'Entities',
      key: 'entities',
      items: [
        {
          name: 'Objective',
          key: 'objective',
          mdFilePath: '../../../assets/files/quest-system/entities/objective.md',
        },{
          name: 'Quest Context',
          key: 'questcontext',
          mdFilePath: '../../../assets/files/quest-system/entities/questcontext.md'
        }, {
          name: 'Quest Context Behaviour',
          key: 'questcontextbehaviour',
          mdFilePath: '../../../assets/files/quest-system/entities/questcontextbehaviour.md'
        }, {
          name: 'Quest',
          key: 'quest',
          mdFilePath: '../../../assets/files/quest-system/entities/quest.md'
        }
      ]
    }]
  }]

