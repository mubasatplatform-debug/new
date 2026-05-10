import { AdminShell } from '../../../components/AdminShell';
import { GoogleMapPanel, ServiceAreaLegend } from '../../../components/MapPanel';
import { StatCard } from '../../../components/Cards';
export default function AdminLiveMapPage() {
  return <AdminShell title="خريطة الأسطول الحية"><div className="grid grid-4"><StatCard label="مركبات على الخريطة" value="245"/><StatCard label="متاحة" value="98"/><StatCard label="مؤجرة" value="97" tone="purple"/><StatCard label="تحتاج تدخل" value="16" tone="red"/></div><div className="section"><GoogleMapPanel mode="fleet"/></div><ServiceAreaLegend/><div className="card" style={{padding:22, marginTop:20}}><h3 style={{color:'var(--purple)'}}>تنبيهات الخريطة</h3><table className="table"><tbody><tr><td>سيارة خرجت من النطاق</td><td>د ب ل 2458</td><td><span className="badge red">حرج</span></td></tr><tr><td>تسليم قريب</td><td>فرع الرياض - العليا</td><td><span className="badge orange">بعد 35 دقيقة</span></td></tr><tr><td>سيارة جاهزة للاستلام</td><td>د ب ل 1234</td><td><span className="badge green">جاهزة</span></td></tr></tbody></table></div></AdminShell>;
}
