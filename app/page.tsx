'use client'

import { useState } from 'react'
import { TextField, Switch, Button, Dialog, SegmentedControl, Slider, BottomSheet, ActionSheet, NavigationBar, TabBar, TabBarItem, IconHome, IconSearch, IconSettings, IconUser, ListSection, ListItem, PhoneMockup, useIOSTheme } from '@ayuuxh/ios-kit'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [search, setSearch] = useState('')

  // Theme State (Managed by Library)
  const { isDark, setTheme } = useIOSTheme()

  // Switch States
  const [airplaneMode, setAirplaneMode] = useState(false)
  const [wifi, setWifi] = useState(true)
  const [bluetooth, setBluetooth] = useState(true)

  // Dialog State
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  // Segmented Control State
  const [mapType, setMapType] = useState('Map')
  const [period, setPeriod] = useState('Daily')

  // Slider State
  const [brightness, setBrightness] = useState(50)
  const [volume, setVolume] = useState(75)

  // Bottom Sheet State
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [quality, setQuality] = useState('High')
  const [dolby, setDolby] = useState(true)

  // Action Sheet State
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false)

  // Tab Bar State
  const [activeTab, setActiveTab] = useState('Settings')

  // Toggle Theme Helper
  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <main className="min-h-screen bg-[#F2F2F7] dark:bg-[#000000] font-sans pb-24">
      <div className="max-w-md mx-auto space-y-8 px-4 pt-12">
        {/* Large Title */}
        <div className="pb-2">
          <h1 className="text-[34px] font-bold text-black dark:text-white tracking-tight">Settings</h1>
        </div>

        {/* 1. Rounded Variants (Search Style) */}
        <div className="space-y-4">
          <h2 className="text-[13px] uppercase tracking-wide text-gray-500 font-semibold px-4">
            Search
          </h2>
          <TextField
            value={search}
            onChange={setSearch}
            placeholder="Search"
            variant="rounded"
            // showClear removed - native behavior doesn't force it
            leftIcon={
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            }
          />
        </div>

        {/* 2. List Variants (Form Style) */}
        <div className="space-y-4">
          <h2 className="text-[13px] uppercase tracking-wide text-gray-500 font-semibold px-4">
            Personal Information
          </h2>
          <div className="bg-white dark:bg-[#1C1C1E] rounded-[10px] overflow-hidden">
            <div className="pl-4">
              <TextField
                label="Name"
                placeholder="Required"
                value={name}
                onChange={setName}
                variant="list"
                style={{ borderBottom: '0.5px solid rgba(128,128,128,0.2)' }}
              />
              <TextField
                label="Email"
                placeholder="example@icloud.com"
                value={email}
                onChange={setEmail}
                type="email"
                variant="list"
                style={{ borderBottom: '0.5px solid rgba(128,128,128,0.2)' }}
              />
              <TextField
                label="Password"
                placeholder="Required"
                value={password}
                onChange={setPassword}
                type="password"
                variant="list"
                name="settings-password"
                id="settings-password"
                autoComplete="new-password"
              />
            </div>
          </div>
          <p className="px-4 text-[13px] text-gray-500">
            This information will be used for iCloud and App Store purchases.
          </p>
        </div>

        {/* 3. Bordered Variants (Login Style) */}
        <div className="space-y-4">
          <h2 className="text-[13px] uppercase tracking-wide text-gray-500 font-semibold px-4">
            Login
          </h2>
          <div className="space-y-3 px-2">
            <TextField
              placeholder="Email or Phone"
              variant="bordered"
              name="login-email"
              id="login-email"
              autoComplete="username"
            />
            <TextField
              placeholder="Password"
              type="password"
              variant="bordered"
              name="login-password"
              id="login-password"
              autoComplete="current-password"
            />
          </div>
        </div>

        {/* 4. Switch Variants (Connectivity) - Using List Components */}
        <ListSection header="Connectivity">
          <ListItem
            title="Airplane Mode"
            trailing={<Switch checked={airplaneMode} onChange={setAirplaneMode} colors={{ active: '#FF9F0A' }} />}
          />
          <ListItem
            title="Wi-Fi"
            detail="Home Network"
            trailing={<Switch checked={wifi} onChange={setWifi} />}
          />
          <ListItem
            title="Bluetooth"
            detail="On"
            trailing={<Switch checked={bluetooth} onChange={setBluetooth} />}
          />
        </ListSection>

        {/* 5. Button Variants */}
        <div className="space-y-4 pb-20">
          <h2 className="text-[13px] uppercase tracking-wide text-gray-500 font-semibold px-4">
            Actions
          </h2>
          <div className="space-y-3 px-4">
            <Button fullWidth onClick={() => alert('Primary Tapped')}>
              Primary Action
            </Button>

            <Button variant="secondary" fullWidth onClick={() => alert('Secondary Tapped')}>
              Secondary Action
            </Button>

            <Button variant="destructive" fullWidth onClick={() => alert('Delete Tapped')}>
              Delete Account
            </Button>

            <div className="flex gap-4">
              <Button loading fullWidth>Loading</Button>
              <Button disabled fullWidth>Disabled</Button>
            </div>

            <Button variant="ghost" fullWidth onClick={() => alert('Skip Tapped')}>
              Skip for now
            </Button>

            {/* 6. Alert Demo */}
            <div className="pt-4">
              <Button
                variant="destructive"
                fullWidth
                onClick={() => setIsAlertOpen(true)}
              >
                Reset All Settings
              </Button>
            </div>

            <Dialog
              isOpen={isAlertOpen}
              onClose={() => setIsAlertOpen(false)}
              title="Reset Settings?"
              description="This will restore factory defaults. Your data will not be deleted."
              buttons={[
                {
                  text: 'Cancel',
                  onClick: () => setIsAlertOpen(false),
                  variant: 'cancel'
                },
                {
                  text: 'Reset',
                  onClick: () => {
                    setIsAlertOpen(false)
                    // Action confirmed - no browser alert needed
                  },
                  variant: 'destructive',
                  bold: true
                }
              ]}
            />
          </div>
        </div>

        {/* 7. Segmented Control */}
        <div className="space-y-4 pb-40">
          <h2 className="text-[13px] uppercase tracking-wide text-gray-500 font-semibold px-4">
            View Options
          </h2>
          <div className="px-4">
            <SegmentedControl
              options={['Map', 'Transit', 'Satellite']}
              value={mapType}
              onChange={setMapType}
            />
            <div className="h-4" />
            <SegmentedControl
              options={['Daily', 'Weekly', 'Monthly', 'Yearly']}
              value={period}
              onChange={setPeriod}
            />
          </div>
        </div>

        {/* 8. Slider */}
        <div className="space-y-4 pb-40">
          <h2 className="text-[13px] uppercase tracking-wide text-gray-500 font-semibold px-4">
            Adjustments
          </h2>
          <div className="px-4 space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2 text-gray-500 font-medium">
                <span>Brightness</span>
                <span>{brightness}%</span>
              </div>
              <Slider
                value={brightness}
                onChange={setBrightness}
              />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2 text-gray-500 font-medium">
                <span>Volume</span>
                <span>{volume}%</span>
              </div>
              <Slider
                value={volume}
                onChange={setVolume}
              />
            </div>
          </div>
        </div>


        {/* 9. Bottom Sheet Trigger */}
        <div className="space-y-4 pb-40">
          <h2 className="text-[13px] uppercase tracking-wide text-gray-500 font-semibold px-4">
            Overlays
          </h2>
          <div className="px-4 flex gap-3">
            <Button variant="secondary" onClick={() => setIsSheetOpen(true)}>
              Bottom Sheet
            </Button>
            <Button variant="secondary" onClick={() => setIsActionSheetOpen(true)}>
              Action Sheet
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Sheet Component */}
      <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)}>
        <div className="space-y-6 pt-2">
          <div className="text-center">
            <h3 className="text-xl font-bold dark:text-white">Music Settings</h3>
            <p className="text-gray-500 text-sm mt-1">Adjust your audio experience</p>
          </div>

          <SegmentedControl
            options={['Low', 'Normal', 'High', 'Lossless']}
            value={quality}
            onChange={setQuality}
          />

          <div className="bg-gray-100 dark:bg-[#2C2C2E] p-4 rounded-xl flex items-center justify-between">
            <span className="font-medium dark:text-white">Dolby Atmos</span>
            <Switch checked={dolby} onChange={setDolby} />
          </div>

          <Button variant="primary" fullWidth onClick={() => setIsSheetOpen(false)}>
            Done
          </Button>
        </div>
      </BottomSheet>

      {/* Action Sheet Component */}
      <ActionSheet
        isOpen={isActionSheetOpen}
        onClose={() => setIsActionSheetOpen(false)}
        title="Profile Options"
        message="What would you like to do?"
        actions={[
          { label: 'Edit Profile', onClick: () => console.log('Edit') },
          { label: 'Share Profile', onClick: () => console.log('Share') },
          { label: 'Delete Account', destructive: true, onClick: () => console.log('Delete') }
        ]}
      />

      {/* Theme Toggle (Floating) */}
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-white/80 dark:bg-black/50 backdrop-blur-md p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3">
          <span className="text-xs font-semibold pl-2 dark:text-white">Dark Mode</span>
          <Switch checked={isDark} onChange={toggleTheme} />
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar>
        <TabBarItem
          icon={<IconHome size={24} />}
          label="Home"
          isActive={activeTab === 'Home'}
          onClick={() => setActiveTab('Home')}
        />
        <TabBarItem
          icon={<IconSearch size={24} />}
          label="Search"
          isActive={activeTab === 'Search'}
          onClick={() => setActiveTab('Search')}
        />
        <TabBarItem
          icon={<IconUser size={24} />}
          label="Profile"
          isActive={activeTab === 'Profile'}
          onClick={() => setActiveTab('Profile')}
        />
        <TabBarItem
          icon={<IconSettings size={24} />}
          label="Settings"
          isActive={activeTab === 'Settings'}
          onClick={() => setActiveTab('Settings')}
          badge={3}
        />
      </TabBar>
    </main>
  )
}
