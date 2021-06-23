### Naming Convention

The convention for icon names is to capitalize the beginning of each word or abbreviation.
For example the icon for Remote control is `RemoteControl`, the icon for USB cable is `UsbCable` and the icon for TV is `Tv`

```jsx
<Box between={3}>
  <Text>
    <RemoteControl /> Remote control
  </Text>

  <Text>
    <UsbCable /> USB cable
  </Text>
  <Text>
    <Tv /> TV
  </Text>
</Box>
```

The variants `default`, `alternative` and `inverted` can be used based on the design of the context in which the icon lives.

```jsx
<Box between={3}>
  <Text>
    <Accessible variant="alternative" /> Accessibility is key
  </Text>
  <Text>
    <Heart variant="default" size={48} /> This is a big heart
  </Text>
</Box>
```

Check out the table below a full list of SVG Icons and their usage guidelines.

```jsx noeditor
const IconTable = require('../../docs/components/custom/IconTable/IconTable').default
;<Box between={4}>
  <IconTable
    heading="Products and Services"
    icons={[
      {
        name: 'Mobility',
        Component: Mobility,
        usageCriteria: 'For mobility/cellphone',
      },
      {
        name: 'Internet',
        Component: Internet,
        usageCriteria: 'For internet, wifi, wifi connectivity',
      },
      {
        name: 'Tv',
        Component: Tv,
        usageCriteria: 'For television',
      },
      {
        name: 'Deals',
        Component: Deals,
        usageCriteria: 'Used when there are discounts/deals/promotion',
      },
      {
        name: 'HomeSecurity',
        Component: HomeSecurity,
        usageCriteria: 'For home security',
      },
      {
        name: 'PhoneHome',
        Component: PhoneHome,
        usageCriteria: 'For home phone',
      },
      {
        name: 'PikTV',
        Component: PikTV,
        usageCriteria:
          'Specifically used when representing Pik TV, any other representation will use TV icon',
      },
    ]}
  />

  <IconTable
    heading="Internet"
    icons={[
      {
        name: 'Speed',
        Component: Speed,
        usageCriteria: 'Speed of service',
      },
      {
        name: 'DataLimit',
        Component: DataLimit,
        usageCriteria: 'Data limitations',
      },
      {
        name: 'WifiBoost',
        Component: WifiBoost,
        usageCriteria: 'Wifi Boost',
      },
      {
        name: 'SpeedReduced',
        Component: SpeedReduced,
        usageCriteria:
          'Represents slower speed connections. Use "Speed" when not used in comparison',
      },
    ]}
  />

  <IconTable
    heading="Optik TV / Pik TV"
    icons={[
      {
        name: 'OnDemand',
        Component: OnDemand,
        usageCriteria: 'TV on demand',
      },
      {
        name: 'OnTheGo',
        Component: OnTheGo,
        usageCriteria: 'TV on the go',
      },
      {
        name: 'Channels',
        Component: Channels,
        usageCriteria: 'Channels',
      },
      {
        name: 'FavouriteNetwork',
        Component: FavouriteNetwork,
        usageCriteria: 'Favourite network',
      },
      {
        name: 'RemoteControl',
        Component: RemoteControl,
        usageCriteria: 'Controlled by remote control',
      },
      {
        name: 'TVChoiceAndFlexibility',
        Component: TVChoiceAndFlexibility,
        usageCriteria: 'For use in value prop statements',
      },
    ]}
  />

  <IconTable
    heading="Home Security"
    icons={[
      {
        name: 'SecurityCamera',
        Component: SecurityCamera,
        usageCriteria: 'Security cameras',
      },
      {
        name: 'SecurityMobile',
        Component: SecurityMobile,
        usageCriteria: 'Mobile security',
      },
      {
        name: 'SecuritySettings',
        Component: SecuritySettings,
        usageCriteria: 'Security settings',
      },
      {
        name: 'SecurityHouse',
        Component: SecurityHouse,
        usageCriteria: 'Secure house',
      },
    ]}
  />

  <IconTable
    heading="Mobility / Home Phone"
    icons={[
      {
        name: 'SimCard',
        Component: SimCard,
        usageCriteria: 'SIM Card',
      },
      {
        name: 'CallForward',
        Component: CallForward,
        usageCriteria: 'Unlimited call forward',
      },
      {
        name: 'CallTalking',
        Component: CallTalking,
        usageCriteria: 'Phone in use',
      },
      {
        name: 'Call',
        Component: Call,
        usageCriteria: 'Phone not in use',
      },
      {
        name: 'CallReceive',
        Component: CallReceive,
        usageCriteria: 'Call receive',
      },
      {
        name: 'CallOut',
        Component: CallOut,
        usageCriteria: 'Outwards call',
      },
      {
        name: 'Messaging',
        Component: Messaging,
        usageCriteria: 'Messaging',
      },
      {
        name: 'VideoChat',
        Component: VideoChat,
        usageCriteria: 'Video Chat',
      },
      {
        name: 'PhoneReception',
        Component: PhoneReception,
        usageCriteria: 'Phone reception',
      },
      {
        name: 'Signal',
        Component: Signal,
        usageCriteria: 'Signal',
      },
    ]}
  />

  <IconTable
    heading="Business"
    icons={[
      {
        name: 'UploadToCloud',
        Component: UploadToCloud,
        usageCriteria: 'Upload to cloud',
      },
      {
        name: 'CloudSync',
        Component: CloudSync,
        usageCriteria: 'Sync to cloud',
      },
      {
        name: 'ComputerNetwork',
        Component: ComputerNetwork,
        usageCriteria: 'Computer network',
      },
      {
        name: 'PrivateCloud',
        Component: PrivateCloud,
        usageCriteria: 'Cloud is private',
      },
      {
        name: 'WifiCloud',
        Component: WifiCloud,
        usageCriteria: 'Wifi-cloud',
      },
      {
        name: 'PhoneBusiness',
        Component: PhoneBusiness,
        usageCriteria: 'Business connect, default business wireline',
      },
      {
        name: 'NextGenFirewall',
        Component: NextGenFirewall,
        usageCriteria: 'Used in conjunction with Next Generation firewall service',
      },
      {
        name: 'ArtificialIntelligence',
        Component: ArtificialIntelligence,
        usageCriteria: 'Artificial Intelligence',
      },
    ]}
  />

  <IconTable
    heading="Health"
    icons={[
      {
        name: 'Baby',
        Component: Baby,
        usageCriteria: 'baby, children, male or female',
      },
      {
        name: 'BabyBoy',
        Component: BabyBoy,
        usageCriteria: 'baby, children, male',
      },
      {
        name: 'BabyGirl',
        Component: BabyGirl,
        usageCriteria: 'baby, children, female',
      },
      {
        name: 'Medical',
        Component: Medical,
        usageCriteria: 'health, medical',
      },
      {
        name: 'Ambulance',
        Component: Ambulance,
        usageCriteria: 'health, ambulance',
      },
    ]}
  />

  <IconTable
    heading="General"
    icons={[
      {
        name: 'Home',
        Component: Home,
        usageCriteria: 'For the home produdcts/services or a service that can be done at home',
      },
      {
        name: 'LocationRegular',
        Component: LocationRegular,
        usageCriteria: 'Used as an indication for location or address',
      },
      {
        name: 'LocationHome',
        Component: LocationHome,
        usageCriteria: 'Used to indicate that the location is the home address',
      },
      {
        name: 'Support',
        Component: Support,
        usageCriteria: 'Customer support, FAQs',
      },
      {
        name: 'Warranty',
        Component: Warranty,
        usageCriteria: 'For when warranty or repair is available/required',
      },
      {
        name: 'Calendar',
        Component: Calendar,
        usageCriteria:
          "For indicating a date, if something is time sensitive, or if a service requires scheduling{' '}",
      },
      {
        name: 'Award',
        Component: Award,
        usageCriteria: '"Best in class" or have won an award',
      },
      {
        name: 'Delivery',
        Component: Delivery,
        usageCriteria: 'Delivery is available or required – not to be confused with service truck',
      },
      {
        name: 'PiggyBank',
        Component: PiggyBank,
        usageCriteria: 'For saving, reduction, money credit back, online bill credit',
      },
      {
        name: 'Settings',
        Component: Settings,
        usageCriteria: 'For settings, troubleshooting, technical support',
      },
      {
        name: 'SpeakerPhone',
        Component: SpeakerPhone,
        usageCriteria: 'Announcements',
      },
      {
        name: 'Bill',
        Component: Bill,
        usageCriteria: 'Paper bill and e-bill, summary of your bill',
      },
      {
        name: 'ArrowUp',
        Component: ArrowUp,
        usageCriteria: 'Upwards direction, price increase',
      },
      {
        name: 'ArrowDown',
        Component: ArrowDown,
        usageCriteria: 'Downwards direction, price descrease',
      },
      {
        name: 'CreditCard',
        Component: CreditCard,
        usageCriteria: 'Credit card (not debit)',
      },
      {
        name: 'Bank',
        Component: Bank,
        usageCriteria: 'Direct debit (not credit)',
      },
      {
        name: 'Heart',
        Component: Heart,
        usageCriteria: 'Used to favourite items (will need toggle versions in future)',
      },
      {
        name: 'Lightbulb',
        Component: Lightbulb,
        usageCriteria: 'Tips, smart lightbulbs',
      },
      {
        name: 'Globe1',
        Component: Globe1,
        usageCriteria: "TELUS international, map and locations (America's specific)",
      },
      {
        name: 'Globe2',
        Component: Globe2,
        usageCriteria: 'TELUS international, can be used to indicate network',
      },
      {
        name: 'LockClosed',
        Component: LockClosed,
        usageCriteria: 'Set and locked, cannot be altered or changed',
      },
      {
        name: 'LockOpened',
        Component: LockOpened,
        usageCriteria: 'Can be altered or changed',
      },
      {
        name: 'Chat1',
        Component: Chat1,
        usageCriteria: 'Contact support through chat/messages on TELUS.com',
      },
      {
        name: 'Chat2',
        Component: Chat2,
        usageCriteria: 'Alternative to chat1, contact support through chat/messages on TELUS.com',
      },
      {
        name: 'CloudDownload',
        Component: CloudDownload,
        usageCriteria: 'Download through cloud',
      },
      {
        name: 'CloudUpload',
        Component: CloudUpload,
        usageCriteria: 'Upload through cloud',
      },
      {
        name: 'Diagram',
        Component: Diagram,
        usageCriteria: 'Diagram, mapping',
      },
      {
        name: 'Direction',
        Component: Direction,
        usageCriteria: 'direction, traffic',
      },
      { name: 'Upload', Component: Upload, usageCriteria: 'Upload' },
      {
        name: 'HeadFemale',
        Component: HeadFemale,
        usageCriteria: 'user, profile, female user',
      },
      {
        name: 'Firewall',
        Component: Firewall,
        usageCriteria: 'firewall, verified security',
      },
      {
        name: 'IdTag',
        Component: IdTag,
        usageCriteria: 'ID, verification of person',
      },
      {
        name: 'Infinite',
        Component: Infinite,
        usageCriteria: 'infinite',
      },
      {
        name: 'HeadMale',
        Component: HeadMale,
        usageCriteria: 'user, profile, group',
      },
      {
        name: 'HeadBoth',
        Component: HeadBoth,
        usageCriteria: 'user, profile, male user',
      },
      {
        name: 'Map',
        Component: typeof MapIcon === 'undefined' ? Map : MapIcon, // This is a workaround for reserved names that cannot be overridden in globalComponents.js
        usageCriteria: 'map, travel, gps',
      },
      {
        name: 'Play',
        Component: Play,
        usageCriteria: 'play, video alternative',
      },
      {
        name: 'Preference',
        Component: Preference,
        usageCriteria: 'preference, settings alternative',
      },
      {
        name: 'Radar',
        Component: Radar,
        usageCriteria: 'Radar, travel (land and sea search)',
      },
      { name: 'Receipt', Component: Receipt, usageCriteria: 'receipt, e-billing' },
      { name: 'Server', Component: Server, usageCriteria: 'server' },
      { name: 'Shop', Component: Shop, usageCriteria: 'shop, store' },
      {
        name: 'Clipboard',
        Component: typeof ClipboardIcon === 'undefined' ? Clipboard : ClipboardIcon,
        usageCriteria: 'For information or forms',
      },
      {
        name: 'Tasks',
        Component: Tasks,
        usageCriteria: 'tasks, checklist, alternative to clipboard',
      },
      {
        name: 'Transmitter',
        Component: Transmitter,
        usageCriteria: 'electricity, transmitter tower',
      },
      {
        name: 'LoginForm',
        Component: LoginForm,
        usageCriteria: 'Login form',
      },
      {
        name: 'ChatSupport',
        Component: ChatSupport,
        usageCriteria: 'Can reach a person on the support team to help with any issues',
      },
      {
        name: 'BackToSchool',
        Component: BackToSchool,
        usageCriteria: 'Back to school deals or promotions, recommended',
      },
      {
        name: 'Gift',
        Component: Gift,
        usageCriteria: 'Gift promotion that comes with the product or service',
      },
      {
        name: 'Users',
        Component: Users,
        usageCriteria: 'Available for more than one user',
      },
      {
        name: 'Devices',
        Component: Devices,
        usageCriteria: 'compatible/for smart devices',
      },
      {
        name: 'Lifesaver',
        Component: Lifesaver,
        usageCriteria: 'For crucial information or that you will get help in the section',
      },
      {
        name: 'ThumbsUp',
        Component: ThumbsUp,
        usageCriteria: 'Indicates that something is liked or recommended',
      },
      {
        name: 'Tablet',
        Component: Tablet,
        usageCriteria: 'Compatible/for tablets',
      },
      {
        name: 'Laptop',
        Component: Laptop,
        usageCriteria: 'For laptops/computers/desktop',
      },
      {
        name: 'Router',
        Component: Router,
        usageCriteria: 'Requires a router or a router is available',
      },
      {
        name: 'Watch',
        Component: Watch,
        usageCriteria: 'Smart watches, fitness watches',
      },
      {
        name: 'Phone',
        Component: Phone,
        usageCriteria: 'Phone',
      },
      {
        name: 'VideoGames',
        Component: VideoGames,
        usageCriteria: 'For video games including virtual reality, connected games, etc',
      },
      {
        name: 'Camera',
        Component: Camera,
        usageCriteria: 'Indicates that a photo is required or suggested; used in My TELUS profile',
      },
      {
        name: 'News',
        Component: News,
        usageCriteria:
          'Announcements or news related to events, press releases, changes that may or may not affect the user',
      },
      {
        name: 'Flag',
        Component: Flag,
        usageCriteria:
          '3rd option, not alert, not a favourite but want to mark (may need on and off toggle)',
      },
      {
        name: 'Email',
        Component: Email,
        usageCriteria:
          'Indicates that an email can be sent to share information with yourself or others; an email is required.',
      },
      {
        name: 'Photo',
        Component: Photo,
        usageCriteria: 'Photo/image',
      },
      {
        name: 'ChartsBar1',
        Component: ChartsBar1,
        usageCriteria: 'Reports, data usage, dashboards',
      },
      {
        name: 'ChartsBar2',
        Component: ChartsBar2,
        usageCriteria: 'Reports, data usage, dashboards',
      },

      {
        name: 'ChartsLine',
        Component: ChartsLine,
        usageCriteria: 'Reports, data usage, dashboards',
      },
      {
        name: 'Collaboration',
        Component: Collaboration,
        usageCriteria: 'Collaboration, IoT',
      },
      {
        name: 'LocationMap',
        Component: LocationMap,
        usageCriteria:
          'Another way to indicate location of something; can use location map or location icon. Cannot be used ON a map',
      },
      {
        name: 'SignPost',
        Component: SignPost,
        usageCriteria: 'Drive+, car related, GPS',
      },
      {
        name: 'Compass',
        Component: Compass,
        usageCriteria: 'Indicates directions, Drive+, car related, GPS, travel',
      },
      {
        name: 'Key',
        Component: typeof KeyIcon === 'undefined' ? Key : KeyIcon,
        usageCriteria: 'Password, key',
      },
      {
        name: 'Information',
        Component: Information,
        usageCriteria: 'Indicates extra information',
      },
      {
        name: 'Attention',
        Component: Attention,
        usageCriteria: 'Used when alerting user of changes or simply to alert them',
      },
      {
        name: 'Bookmark',
        Component: Bookmark,
        usageCriteria:
          'Used to bookmark a page or callout a product or service as being popular or recommended',
      },
      {
        name: 'ServiceTruck',
        Component: ServiceTruck,
        usageCriteria: 'Set up is required or available to set the product/service up',
      },
      {
        name: 'Time',
        Component: Time,
        usageCriteria: 'Time; for scheduling',
      },
      {
        name: 'Fingerprint',
        Component: Fingerprint,
        usageCriteria: 'Unique/personalized service, security',
      },
      {
        name: 'Music',
        Component: Music,
        usageCriteria: 'Music, Stingray music channels (Optik TV)',
      },
      {
        name: 'Files',
        Component: Files,
        usageCriteria: 'More than one document',
      },
      {
        name: 'Document',
        Component: typeof DocumentIcon === 'undefined' ? Document : DocumentIcon,
        usageCriteria: 'Single document',
      },
      {
        name: 'Layers',
        Component: Layers,
        usageCriteria: 'Plans, channels, theme packs',
      },
      {
        name: 'Target',
        Component: Target,
        usageCriteria: 'Target market, precision, focus, business targets',
      },
      {
        name: 'Heartbeat',
        Component: Heartbeat,
        usageCriteria: 'Health related',
      },
      {
        name: 'UsbCable',
        Component: UsbCable,
        usageCriteria: 'Device can be connected with a USB or requires a USB cable to work',
      },
      {
        name: 'Headset',
        Component: Headset,
        usageCriteria: 'Headsets; requires or recommends headsets',
      },
      {
        name: 'Speaker',
        Component: Speaker,
        usageCriteria: 'Speakers; can be interchanged with headset',
      },
      {
        name: 'Refresh',
        Component: Refresh,
        usageCriteria: 'Page/section refresh',
      },
      {
        name: 'Record',
        Component: Record,
        usageCriteria: 'Voicemail',
      },
      {
        name: 'Visible',
        Component: Visible,
        usageCriteria: 'Visible informaton',
      },
      {
        name: 'Invisible',
        Component: Invisible,
        usageCriteria: 'Invisible information',
      },
      {
        name: 'SharedAccount',
        Component: SharedAccount,
        usageCriteria: 'Account is shared',
      },
      {
        name: 'AddUser',
        Component: AddUser,
        usageCriteria: 'User can be added',
      },
      {
        name: 'BatteryCharging',
        Component: BatteryCharging,
        usageCriteria: 'Battery charging',
      },
      {
        name: 'Contract',
        Component: Contract,
        usageCriteria: 'Contract',
      },
      {
        name: 'Briefcase',
        Component: Briefcase,
        usageCriteria: 'Business',
      },
      {
        name: 'AlarmClock',
        Component: AlarmClock,
        usageCriteria: 'Time sensitive',
      },
      {
        name: 'Suitcase',
        Component: Suitcase,
        usageCriteria: 'Travel',
      },
      {
        name: 'Cronometer',
        Component: Cronometer,
        usageCriteria: 'Used when comparing speeds',
      },
      {
        name: 'Photos',
        Component: Photos,
        usageCriteria: 'Images, photos, albums',
      },
      {
        name: 'Office',
        Component: Office,
        usageCriteria: 'office, address',
      },
      {
        name: 'Offices',
        Component: Offices,
        usageCriteria: 'Multiple offices, medium - large businesses',
      },
      {
        name: 'Passport',
        Component: Passport,
        usageCriteria: 'travel, document verification',
      },
      {
        name: 'Networking',
        Component: Networking,
        usageCriteria: 'Networking',
      },
      {
        name: 'Accessible',
        Component: Accessible,
        usageCriteria: 'Accessible',
      },
      {
        name: 'Check',
        Component: Check,
        usageCriteria: 'Default icon used exclusively in benefit list for business',
      },
      {
        name: 'Movie',
        Component: Movie,
        usageCriteria: 'Movie, film, video',
      },
      {
        name: 'Soccer',
        Component: Soccer,
        usageCriteria: 'Soccer, sports',
      },
      {
        name: 'BatteryCar',
        Component: BatteryCar,
        usageCriteria: 'Car battery',
      },
      {
        name: 'Car',
        Component: Car,
        usageCriteria: 'Vehicle',
      },
      {
        name: 'Diamond',
        Component: Diamond,
        usageCriteria: 'Potentials (business, earnings, etc)',
      },
      {
        name: 'TowTruck',
        Component: TowTruck,
        usageCriteria: 'Roadside assistance',
      },
      { name: 'Donate', Component: Donate, usageCriteria: 'Donation' },
      {
        name: 'NoContract',
        Component: NoContract,
        usageCriteria: 'For use in value prop statements',
      },
      {
        name: 'Sales',
        Component: Sales,
        usageCriteria: 'Custom icon for the Home Solutions Sales team',
      },
    ]}
  />
</Box>
```
