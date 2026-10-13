import {
  AlertCircle, ArrowLeft, ArrowRight, Award, BadgeCheck, Bike, Building2, CheckCircle2, Crown,
  FileCheck2, Gem, Headset, MapPin, Menu, MessageCircle, MessageSquarePlus, Percent, Phone, Play,
  Route, Send, ShieldCheck, Sparkles, Star, Store, Tags, UserRound, Users, Wrench, X, Zap,
} from 'lucide-react';
import { memo } from 'react';

// Only the icons the site uses are imported, so the bundle stays small.
// Add a new icon to this list before using its name elsewhere.
const ICONS = {
  AlertCircle, ArrowLeft, ArrowRight, Award, BadgeCheck, Bike, Building2, CheckCircle2, Crown,
  FileCheck2, Gem, Headset, MapPin, Menu, MessageCircle, MessageSquarePlus, Percent, Phone, Play,
  Route, Send, ShieldCheck, Sparkles, Star, Store, Tags, UserRound, Users, Wrench, X, Zap,
};

const toPascal = (s) => (typeof s === 'string' ? s : '')
  .split('-')
  .map(w => w.charAt(0).toUpperCase() + w.slice(1))
  .join('');

function ApperIcon({ name, size = 20, className = '', ...props }) {
  if (!name) return null;
  const Icon = ICONS[toPascal(name)];
  if(!Icon) return null;
  return <Icon size={size} className={className} {...props} />;
}
export default memo(ApperIcon);
