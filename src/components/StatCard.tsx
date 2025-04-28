
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  Wallet, 
  CreditCard, 
  Building, 
  Activity, 
  ShoppingCart, 
  Wrench, 
  BookOpen 
} from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  icon: string;
  className?: string;
};

const StatCard = ({ title, value, change, icon, className }: StatCardProps) => {
  const isPositiveChange = change && change.startsWith('+');
  
  const getIcon = () => {
    switch (icon) {
      case 'users':
        return <Users className="h-5 w-5 text-blue-600" />;
      case 'wallet':
        return <Wallet className="h-5 w-5 text-green-600" />;
      case 'credit-card':
        return <CreditCard className="h-5 w-5 text-purple-600" />;
      case 'building':
        return <Building className="h-5 w-5 text-orange-600" />;
      case 'dashboard':
        return <LayoutDashboard className="h-5 w-5 text-gray-600" />;
      case 'activity':
        return <Activity className="h-5 w-5 text-red-600" />;
      case 'shopping-cart':
        return <ShoppingCart className="h-5 w-5 text-indigo-600" />;
      case 'tool':
        return <Wrench className="h-5 w-5 text-yellow-600" />;
      case 'book':
        return <BookOpen className="h-5 w-5 text-teal-600" />;
      default:
        return <LayoutDashboard className="h-5 w-5 text-gray-600" />;
    }
  };
  
  return (
    <Card className={cn("shadow-sm hover:shadow-md transition-shadow", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h4 className="text-2xl font-bold mt-2">{value}</h4>
            {change && (
              <p className={`text-xs font-medium mt-1 ${isPositiveChange ? 'text-green-600' : 'text-red-600'}`}>
                {change} dari bulan lalu
              </p>
            )}
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            {getIcon()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
