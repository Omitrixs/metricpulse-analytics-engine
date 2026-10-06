import {SettingRowProps} from "@/types/types"

function SettingRow({children, label, description}: SettingRowProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b last:border-0">
        <div className="flex-1 mr-8">
            <p className="text-sm font-medium">{label}</p>
            {description && (
                <p className="text-xs text-muted-foreground mt-0.5" >{description}</p>
            )}
        </div>
        <div className="shrink-0">{children}</div>
    </div>
  )
}

export default SettingRow