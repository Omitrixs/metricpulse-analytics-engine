import {Card, CardHeader, CardContent, CardTitle} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { RiUploadCloudLine } from "@remixicon/react"
import { Separator } from "@/components/ui/separator"
import { settingsItems } from "@/data/data"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import SettingRow from "@/components/settings-row"
import { Switch } from "@/components/ui/switch"

function page() {
  return (
    <main>
      <div className="p-6 space-y-5 max-w-2xl">
        {/* Profile */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* wrapper */}
            <div className="flex items-center gap-4">
              <Avatar className="size-14">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>OT</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Omitusa Toyosi</p>
                <p className="text-xs text-muted-foreground">omitusaayotoyosi@gmail.com</p>
              </div>
              <Button className="ml-auto text-xs">
                <RiUploadCloudLine />
              </Button>
            </div>
            <Separator />
            {/* wrapper */}
            <div className="grid grid-cols-2 gap-4">
              {settingsItems.map((item) => (
                <div key={item.id} className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground" >{item.label}</Label>
                  <Input id={item.id} defaultValue={item.value} className="h-9 text-sm" />
                </div>
              ))}
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>
          {/* Notification */}
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <SettingRow
                label="Email Notifications"
                description="Receive email updates about your account activity."
              >
                <Switch defaultChecked /> 
              </SettingRow>
              <SettingRow
                label="Payment alerts"
                description="Get notified on new payments."
              >
                <Switch defaultChecked /> 
              </SettingRow>
              <SettingRow
                label="Weekly digest"
                description="Summary of your weekly activity."
              >
                <Switch /> 
              </SettingRow>
              <SettingRow
                label="Marketing emails"
                description="Product updates and announcements."
              >
                <Switch /> 
              </SettingRow>
            </CardContent>
          </Card>
          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent>
              <SettingRow
                label="Two-factor authentication"
                description="Add an extra layer of security"
              >
                <Switch /> 
              </SettingRow>
              <SettingRow
                label="Login notification"
                description="Alert on new sign-ins."
              >
                <Switch defaultChecked /> 
              </SettingRow>
              {/* Button */}
              <div className="pt-4 pb-2">
                <Button>Change password</Button>
              </div>
            </CardContent>
          </Card>
          {/* Billing */}
          <Card>
            <CardHeader>
              <CardTitle>Billing & Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                {/* Text */}
                <div>
                  <p className="text-sm font-semibold">free plan</p>
                  <p className="text-xs text-muted-foreground">Up to 3 users. 5GB storage</p>
                </div>
                <Button>Upgrade to Pro</Button>
              </div>
            </CardContent>
          </Card>
          {/* Danger Zone */}
          <Card>
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
            </CardHeader>
            <CardContent>
              <SettingRow
                label="Delete Account"
                description="permanently delete your account and all data"
              >
                <Button variant={"destructive"} 
                className="text-xs">Delete account</Button>
              </SettingRow>
              <SettingRow
                label="Login notification"
                description="Alert on new sign-ins."
              >
                <Switch defaultChecked /> 
              </SettingRow>
              {/* Button */}
              <div className="">
              </div>
            </CardContent>
          </Card>
      </div>
    </main>
  )
}

export default page