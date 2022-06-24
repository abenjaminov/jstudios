export enum DeviceType {
  mobile,
  desktopChrome,
  desktopOther
}

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
  isActive?: boolean;
}

export const studioItemsConfiguration: Array<StudioItemInfo> = [
  {
    name: "Implementing a scalable quest system",
    key: 'implemetingascalablequestsystem',
    icon: 'fa-brands fa-medium',
    isActive: true,
    type: StudioItemType.link,
    description: 'Medium article discussing a possible implementation for a quest system in Unity.',
    context: 'https://medium.com/@asaf.j.benjaminov/implementing-a-scalable-quest-system-7f36ea4cfe22'
},
  {
    name: 'Quest System asset pack',
    key: 'questsystem',
    icon: 'fa-brands fa-unity',
    type: StudioItemType.docs,
    isActive: true,
    description: 'A highly scalable quest system asset pack for Unity.',
    context: [
      {
      name: 'Quest System',
      key: 'questsystemgeneral',
      items: [{
        name: 'Getting started',
        key: 'gettingstarted',
        mdFilePath: '../../../assets/files/quest-system/getting-started.md'
      }, {
        name: 'Quest System Core',
        key: 'questsystemcore',
        mdFilePath: '../../../assets/files/quest-system/quest-system-core.md'
      }]
    },{
      name: 'Objectives',
      key: 'objectives',
      items: [{
        name: 'IObjective',
        key: 'iobjective',
        mdFilePath: '../../../assets/files/quest-system/objectives/iobjective.md',
      },{
        name: 'Objective',
        key: 'objective',
        mdFilePath: '../../../assets/files/quest-system/objectives/objective.md',
      }]
    },{
      name: 'Quest Context',
      key: 'questcontexts',
      items: [{
        name: 'Quest Context',
        key: 'questcontext',
        mdFilePath: '../../../assets/files/quest-system/quest-context/questcontext.md'
      }, {
        name: 'Quest Context Behaviour',
        key: 'questcontextbehaviour',
        mdFilePath: '../../../assets/files/quest-system/quest-context/questcontextbehaviour.md'
      }]
    },{
      name: 'Quests',
      key: 'quests',
      items: [
        {
          name: 'Quest',
          key: 'quest',
          mdFilePath: '../../../assets/files/quest-system/quests/quest.md'
        },
        {
          name: 'Single objective quest',
          key: 'soq',
          mdFilePath: '../../../assets/files/quest-system/quests/soq.md'
        },
        {
          name: 'Perform action quest',
          key: 'actionquest',
          mdFilePath: '../../../assets/files/quest-system/quests/action-quest.md'
        },
        {
          name: 'Multiple objective quest',
          key: 'moq',
          mdFilePath: '../../../assets/files/quest-system/quests/moq.md'
        }
      ]
    },{
      name: 'Models',
      key: 'models',
      items: [{
        name: 'Quest System Asset',
        key: 'questsystemasset',
        mdFilePath: '../../../assets/files/quest-system/models/quest-system-asset.md'

      },{
        name: 'Active State',
        key: 'activestate',
        mdFilePath: '../../../assets/files/quest-system/models/active-state.md'

      }, {
        name: 'Completion Action',
        key: 'completionaction',
        mdFilePath: '../../../assets/files/quest-system/models/completion-action.md'
      }, {
        name: 'IRequirement',
        key: 'requirement',
        mdFilePath: '../../../assets/files/quest-system/models/irequirement.md'
      }, {
        name: 'Dummy Context',
        key: 'dummycontext',
        mdFilePath: '../../../assets/files/quest-system/models/dummy-context.md'
      }]
    }]
  },
  {
    name: 'JStudios utilities',
    key: 'jstudiosutilities',
    description: 'Utilities for working and coding in Unity',
    icon: 'fa-brands fa-unity',
    type: StudioItemType.docs,
    isActive: false,
    context: []
  }
]

