"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  position: string;
  phone: string;
  description: string;
}

interface DemoBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoBookingDialog({ open, onOpenChange }: DemoBookingDialogProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    position: '',
    phone: '',
    description: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // 清除该字段的错误
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名';
    }
    if (!formData.company.trim()) {
      newErrors.company = '请输入公司名称';
    }
    if (!formData.position.trim()) {
      newErrors.position = '请输入职位';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = '请输入联系电话';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入正确的手机号码';
    }
    if (!formData.description.trim()) {
      newErrors.description = '请输入需求描述';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 提交成功
    alert('预约提交成功！我们会尽快与您联系。');
    
    // 重置表单
    setFormData({
      name: '',
      company: '',
      position: '',
      phone: '',
      description: '',
    });

    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[500px]"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <DialogHeader>
          <DialogTitle
            className="text-2xl font-bold"
            style={{ color: '#333333' }}
          >
            预约定制演示
          </DialogTitle>
          <DialogClose asChild>
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">关闭</span>
            </button>
          </DialogClose>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* 姓名 */}
          <div className="space-y-2">
            <Label htmlFor="name" style={{ color: '#333333' }}>
              姓名 <span style={{ color: 'rgb(215, 0, 29)' }}>*</span>
            </Label>
            <Input
              id="name"
              placeholder="请输入您的姓名"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              style={{
                borderColor: errors.name ? 'rgb(215, 0, 29)' : '#E5E5E5',
                backgroundColor: '#FAFAFA'
              }}
            />
            {errors.name && (
              <p className="text-sm" style={{ color: 'rgb(215, 0, 29)' }}>
                {errors.name}
              </p>
            )}
          </div>

          {/* 公司 */}
          <div className="space-y-2">
            <Label htmlFor="company" style={{ color: '#333333' }}>
              公司名称 <span style={{ color: 'rgb(215, 0, 29)' }}>*</span>
            </Label>
            <Input
              id="company"
              placeholder="请输入公司名称"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              style={{
                borderColor: errors.company ? 'rgb(215, 0, 29)' : '#E5E5E5',
                backgroundColor: '#FAFAFA'
              }}
            />
            {errors.company && (
              <p className="text-sm" style={{ color: 'rgb(215, 0, 29)' }}>
                {errors.company}
              </p>
            )}
          </div>

          {/* 职位 */}
          <div className="space-y-2">
            <Label htmlFor="position" style={{ color: '#333333' }}>
              职位 <span style={{ color: 'rgb(215, 0, 29)' }}>*</span>
            </Label>
            <Input
              id="position"
              placeholder="请输入您的职位"
              value={formData.position}
              onChange={(e) => handleChange('position', e.target.value)}
              style={{
                borderColor: errors.position ? 'rgb(215, 0, 29)' : '#E5E5E5',
                backgroundColor: '#FAFAFA'
              }}
            />
            {errors.position && (
              <p className="text-sm" style={{ color: 'rgb(215, 0, 29)' }}>
                {errors.position}
              </p>
            )}
          </div>

          {/* 电话 */}
          <div className="space-y-2">
            <Label htmlFor="phone" style={{ color: '#333333' }}>
              联系电话 <span style={{ color: 'rgb(215, 0, 29)' }}>*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="请输入手机号码"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              style={{
                borderColor: errors.phone ? 'rgb(215, 0, 29)' : '#E5E5E5',
                backgroundColor: '#FAFAFA'
              }}
            />
            {errors.phone && (
              <p className="text-sm" style={{ color: 'rgb(215, 0, 29)' }}>
                {errors.phone}
              </p>
            )}
          </div>

          {/* 需求描述 */}
          <div className="space-y-2">
            <Label htmlFor="description" style={{ color: '#333333' }}>
              需求描述 <span style={{ color: 'rgb(215, 0, 29)' }}>*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="请简要描述您的需求和期望..."
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={4}
              style={{
                borderColor: errors.description ? 'rgb(215, 0, 29)' : '#E5E5E5',
                backgroundColor: '#FAFAFA',
                resize: 'vertical'
              }}
            />
            {errors.description && (
              <p className="text-sm" style={{ color: 'rgb(215, 0, 29)' }}>
                {errors.description}
              </p>
            )}
          </div>

          {/* 提交按钮 */}
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            style={{
              backgroundColor: 'rgb(215, 0, 29)',
              color: '#FFFFFF',
              height: '48px',
              fontSize: '16px'
            }}
          >
            {isSubmitting ? '提交中...' : '提交预约'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
